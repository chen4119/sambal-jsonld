import { JSONLD_TYPE } from "../constants";
import { isObjectLiteral } from "../utils";
import { schemaTypeChildren } from "../schemaTypeChildren";

export function isSchemaType(jsonld: unknown, type: string, descendants = true) {
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

export function getEntityByType(data: unknown, type: string, descendants = true) {
    if (Array.isArray(data)) {
        for (const jsonld of data) {
            if (isSchemaType(jsonld, type, descendants)) {
                return jsonld;
            }
        }
    } else if (isObjectLiteral(data)) {
        return isSchemaType(data, type, descendants) ? data : null;
    }
    return null;
}

export function getEntitiesByType(data: unknown, type: string, descendants = true) {
    const entities = [];
    if (Array.isArray(data)) {
        for (const jsonld of data) {
            if (isSchemaType(jsonld, type, descendants)) {
                entities.push(jsonld);
            }
        }
    } else if (isObjectLiteral(data) && isSchemaType(data, type, descendants)) {
        entities.push(data);
    }
    return entities;
}