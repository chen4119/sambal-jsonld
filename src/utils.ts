import {schemaMap} from "./Schema";
import {SAMBAL_PARENT} from "./Constants";

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

export function isBlankNodeIRI(iri: string) {
    return iri.startsWith("_:");
}

export function isSchemaOrgType(typeId: string) {
    return schemaMap.has(typeId.toLowerCase());
}

export function getSchemaOrgType(typeId: string) {
    return schemaMap.get(typeId.toLowerCase());
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
        for (const parentId of schemaParents) {
            const parentSchema = getSchemaOrgType(parentId);
            parents.push(parentSchema);
            getParentTypes(parentSchema, parents);
        }
    }
}