import {schemaMap} from "./schema";
import {
    SAMBAL_PARENT,
    SCHEMA_CONTEXT,
    SAMBAL_VALUES,
    JSONLD_ID
} from "./constants";

export function isObjectLiteral(obj: any) {
    return obj !== null && typeof(obj) === "object" && Object.getPrototypeOf(obj) === Object.prototype;
}

export function  isJsonLdRef(value) {
    return isObjectLiteral(value) && Object.keys(value).length === 1 && typeof (value[JSONLD_ID]) === "string";
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

export function makeAbsoluteSchemaOrgIRI(name: string) {
    return `${SCHEMA_CONTEXT}/${name}`;
}
export function isBlankNodeIRI(iri: string) {
    return iri.startsWith("_:");
}

export function isSchemaOrgType(absTypeIRI: string) {
    const key = makeRelativeIRI(`${SCHEMA_CONTEXT}/`, absTypeIRI).toLowerCase();
    return schemaMap.has(key);
}

export function getSchemaOrgType(absTypeIRI: string) {
    const key = makeRelativeIRI(`${SCHEMA_CONTEXT}/`, absTypeIRI).toLowerCase();
    return schemaMap.get(key);
}

export function getSchemaOrgParentTypes(absTypeIRI: string) {
    const parents = [];
    if (isSchemaOrgType(absTypeIRI)) {
        getParentTypes(getSchemaOrgType(absTypeIRI), parents);
    }
    return [...parents, "Thing"];
}

function getParentTypes(schema, parents: string[]) {
    const schemaParents = schema[SAMBAL_PARENT];
    if (schemaParents) {
        for (const parentName of schemaParents) {
            if (parents.indexOf(parentName) < 0 && parentName !== "Thing") {
                parents.push(parentName);
            }
        }
        for (const parentName of schemaParents) {
            const parentSchema = getSchemaOrgType(`${SCHEMA_CONTEXT}/${parentName}`);
            getParentTypes(parentSchema, parents);
        }
    }
}

export function isSchemaOrgEnumeration(absTypeIRI: string) {
    const schema = getSchemaOrgType(absTypeIRI);
    if (schema && schema[SAMBAL_VALUES]) {
        return true;
    }
    return false;
}

export function flatMap(array: any[]) {
    return array.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flatMap(val) : val);
    }, []);
}