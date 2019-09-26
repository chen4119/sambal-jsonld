import {schemaMap} from "./Schema";
import JsonLd from "./JsonLd";
import {
    SAMBAL_PARENT,
    SCHEMA_CONTEXT,
    JSONLD_CONTEXT,
    JSONLD_TYPE,
    JSONLD_ID,
    SAMBAL_NAME,
    SAMBAL_ID,
    SCHEMA_PRIMITIVE_SET,
    SCHEMA_ENUMERATION
} from "./Constants";

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

export async function hydrateJsonLd(json: any, fetcher: (url) => Promise<any>, context?: any) {
    if (Array.isArray(json)) {
        const resolvedArray = [];
        for (const item of json) {
            resolvedArray.push(await hydrateJsonLd(item, fetcher, context));
        }
        return resolvedArray;
    } else if (typeof(json) === "object") {
        for (const propName of Object.keys(json)) {
            const propValue = await hydrateJsonLd(json[propName], fetcher, context);
            json[propName] = propValue;
        }
        const jsonld = jsonToJsonLd(json, context);
        return await jsonld.resolveJson(fetcher);
    }
    return json;
}

export function toSchemOrgJsonLd(json: any, type: string, context?: any) {
    const typeId = `${SCHEMA_CONTEXT}/${type}`;
    if (!isSchemaOrgType(typeId)) {
        throw new Error(`schema.org ${type} not found`);
    }
    const schema = getSchemaOrgType(typeId);
    const typeName = schema[SAMBAL_NAME];
    const parents = [];
    getParentTypes(schema, parents);
    
    const jsonld = jsonToJsonLd(json, context ? context : SCHEMA_CONTEXT, typeName);
    let schemaOrgJsonLd;
    if (context === SCHEMA_CONTEXT) {
        schemaOrgJsonLd = {
            [JSONLD_TYPE]: typeName
        };
    } else {
        schemaOrgJsonLd = {
            [JSONLD_CONTEXT]: SCHEMA_CONTEXT,
            [JSONLD_TYPE]: typeName
        };
    }
    populateSchemaProps(schemaOrgJsonLd, jsonld, schema);
    for (const parentSchema of parents) {
        populateSchemaProps(schemaOrgJsonLd, jsonld, parentSchema);
    }
    return schemaOrgJsonLd;
}

function jsonToJsonLd(json: any, context?: any, type?: any) {
    if (json[JSONLD_CONTEXT]) {
        return new JsonLd(json);
    } 
    if (context) {
        json[JSONLD_CONTEXT] = context;
    }
    if (type) {
        json[JSONLD_TYPE] = type;
    }
    return new JsonLd(json);
}

function populateSchemaProps(schemaOrgJsonLd: any, json: JsonLd, schema: any) {
    for (const propName of Object.keys(schema)) {
        if (propName.startsWith("_")) {
            continue;
        }
        const propTypes = schema[propName];
        const value = getPropValue(propName, propTypes, json);
        if (value) {
            schemaOrgJsonLd[propName] = value;
        }
    }
}

function getPropValue(propName: string, propTypes: string[], json: JsonLd) {
    const termId = json.getTermId(propName);
    const termValue = json.getTermValue(termId);
    if (typeof(termValue) !== "undefined" && termValue !== null) {
        return validatePropValue(termValue, propTypes);
    }
    return null;
}

function validatePropValue(value: any, propTypes: string[]) {
    if (Array.isArray(value)) {
        return value.map(item => validatePropValue(item, propTypes));
    } else if (typeof(value) === "object") {
        const classTypeName = getClassTypeName(value, propTypes);
        // possible not to have a class type
        if (classTypeName) {
            return toSchemOrgJsonLd(value, classTypeName, SCHEMA_CONTEXT);
        }
    } else {
        // TODO: validate primitive type
        return value;
    }
    return null;
}

// potential has more than one class type, just get first one
function getClassTypeName(json: any, propTypes: string[]) {
    if (json[JSONLD_TYPE]) {
        return json[JSONLD_TYPE];
    }
    for (const typeId of propTypes) {
        if (!SCHEMA_PRIMITIVE_SET.has(typeId) && !isEnumeration(typeId)) {
            return getSchemaOrgType(typeId)[SAMBAL_NAME];
        }
    }
    return null;
}

function isEnumeration(typeId: string) {
    const parentSchemas = getSchemaOrgParentTypes(typeId);
    for (const schema of parentSchemas) {
        if (schema[SAMBAL_ID] === SCHEMA_ENUMERATION) {
            return true;
        }
    }
    return false;
}

function getParentTypes(schema, parents) {
    const schemaParents = schema[SAMBAL_PARENT];
    if (schemaParents) {
        for (const parentId of schemaParents) {
            const parentSchema = getSchemaOrgType(parentId);
            parents.push(parentSchema);
            getParentTypes(parentSchema, parents);
        }
    }
}
