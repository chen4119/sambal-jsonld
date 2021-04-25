import { JsonLd, JSONLD_TYPE } from "../constants";
import { schemaTypeChildren } from "../schemaTypeChildren";

export function isSchemaType(jsonld: JsonLd, type: string, descendants = true) {
    if (!jsonld || !jsonld[JSONLD_TYPE] || !type) {
        return false;
    }
    const lowerJsonLdType = jsonld[JSONLD_TYPE].toLowerCase();
    const lowerType = type.toLowerCase();
    let children = [];
    if (descendants && schemaTypeChildren.has(lowerType)) {
        children = schemaTypeChildren.get(lowerType);
    }
    return lowerJsonLdType === lowerType || children.indexOf(lowerJsonLdType) >= 0;
}

export function getEntityByType(jsonLdList: JsonLd[], type: string, descendants = true) {
    if (Array.isArray(jsonLdList)) {
        for (const jsonld of jsonLdList) {
            if (isSchemaType(jsonld, type, descendants)) {
                return jsonld;
            }
        }
    }
    return null;
}

export function getEntitiesByType(jsonLdList: JsonLd[], type: string, descendants = true) {
    const entities = [];
    if (Array.isArray(jsonLdList)) {
        for (const jsonld of jsonLdList) {
            if (isSchemaType(jsonld, type, descendants)) {
                entities.push(jsonld);
            }
        }
    }
    return entities;
}