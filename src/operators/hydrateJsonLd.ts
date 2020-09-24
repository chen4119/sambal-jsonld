import {isObjectLiteral} from "../utils";
import JsonLd from "../JsonLd";

export async function hydrateJsonLd(json: unknown, fetcher: (url) => Promise<any>, context?: any) {
    if (Array.isArray(json)) {
        const resolvedArray = [];
        for (const item of json) {
            resolvedArray.push(await hydrateJsonLd(item, fetcher, context));
        }
        return resolvedArray;
    } else if (isObjectLiteral(json)) {
        const jsonld = new JsonLd(json, context);
        const hydratedJson = await jsonld.resolveJson(fetcher);
        if (hydratedJson) {
            for (const propName of Object.keys(hydratedJson)) {
                const propValue = await hydrateJsonLd(hydratedJson[propName], fetcher, context);
                hydratedJson[propName] = propValue;
            }
        }
        return hydratedJson;
    }
    return json;
}