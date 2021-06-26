import { JSONLD_CONTEXT, JSONLD_ID, JSONLD_TYPE } from "../constants";
import { isJsonLdRef, isObjectLiteral, normalizeUri, isAbsUri } from "../utils";

export function expandUri(jsonld: unknown, baseUrl?: string) {
    const derivedBase = (jsonld[JSONLD_CONTEXT] && jsonld[JSONLD_CONTEXT]["@base"]) ? 
        jsonld[JSONLD_CONTEXT]["@base"] : baseUrl;

    return derivedBase ? toAbsUri(derivedBase, jsonld) : jsonld;
}

function toAbsUri(baseUrl: string, jsonld: unknown) {
    if (Array.isArray(jsonld)) {
        return jsonld.map(j => toAbsUri(baseUrl, j));
    }

    if (isJsonLdRef(jsonld) && jsonld[JSONLD_ID] && !isAbsUri(jsonld[JSONLD_ID])) {
        jsonld[JSONLD_ID] = normalizeUri(`${baseUrl}${jsonld[JSONLD_ID]}`);
    } else if (isObjectLiteral(jsonld)) {
        for (const fieldName of Object.keys(jsonld)) {
            if (fieldName !== JSONLD_ID && fieldName !== JSONLD_TYPE && fieldName !== JSONLD_CONTEXT) {
                const fieldValue = jsonld[fieldName];
                jsonld[fieldName] = toAbsUri(baseUrl, fieldValue);
            }
        }
    }
    return jsonld;
}
