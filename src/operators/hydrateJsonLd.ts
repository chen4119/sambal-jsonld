import {isObjectLiteral} from "../utils";
import JsonLd from "../JsonLd";

export async function hydrateJsonLd(json: object, fetcher: (url) => Promise<any>, context?: any) {
    if (Array.isArray(json)) {
        const resolvedArray = [];
        for (const item of json) {
            resolvedArray.push(await hydrateJsonLd(item, fetcher, context));
        }
        return resolvedArray;
    } else if (isObjectLiteral(json)) {
        for (const propName of Object.keys(json)) {
            const propValue = await hydrateJsonLd(json[propName], fetcher, context);
            json[propName] = propValue;
        }
        const jsonld = new JsonLd(json, context);
        return await jsonld.resolveJson(fetcher);
    }
    return json;
}