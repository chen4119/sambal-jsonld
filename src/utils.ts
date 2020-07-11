import {schemaMap} from "./schema";
import {SAMBAL_PARENT, SCHEMA_CONTEXT} from "./constants";

export function isObjectLiteral(obj: any) {
    return obj !== null && typeof(obj) === "object" && Object.getPrototypeOf(obj) === Object.prototype;
}

export function isUrl(src: string) {
    if (!src) {
        return false;
    }
    return src.toLowerCase().startsWith("http://") || src.toLowerCase().startsWith("https://");
}

export function makeAbsoluteIRI(base: string, relativeIRI: string) {
    if (base.endsWith("#") || base.endsWith("/")) {
        return `${base}${relativeIRI}`;
    }
    return `${base}/${relativeIRI}`;
}

export function makeRelativeIRI(base: string, absoluteUri: string) {
    if (absoluteUri.indexOf(base) === 0) {
        return absoluteUri.substring(base.length);
    }
    return absoluteUri;
}

export function isBlankNodeIRI(iri: string) {
    return iri.startsWith("_:");
}

export function isSchemaOrgType(typeId: string) {
    const key = makeRelativeIRI(`${SCHEMA_CONTEXT}/`, typeId).toLowerCase();
    return schemaMap.has(key);
}

export function getSchemaOrgType(typeId: string) {
    const key = makeRelativeIRI(`${SCHEMA_CONTEXT}/`, typeId).toLowerCase();
    return schemaMap.get(key);
}

export function getSchemaOrgParentTypes(typeId: string) {
    const parents = [];
    if (isSchemaOrgType(typeId)) {
        getParentTypes(getSchemaOrgType(typeId), parents);
    }
    return parents;
}

export function getParentTypes(schema, parents) {
    const schemaParents = schema[SAMBAL_PARENT];
    if (schemaParents) {
        for (const parentName of schemaParents) {
            const parentSchema = getSchemaOrgType(`${SCHEMA_CONTEXT}/${parentName}`);
            parents.push(parentSchema);
            getParentTypes(parentSchema, parents);
        }
    }
}