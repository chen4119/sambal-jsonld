import moment from 'moment';
import {schemaMap} from "./Schema";
import JsonLd from "./JsonLd";
import {
    SAMBAL_PARENT,
    SCHEMA_CONTEXT,
    JSONLD_CONTEXT,
    JSONLD_TYPE,
    JSONLD_GRAPH,
    JSONLD_ID,
    SAMBAL_NAME,
    SAMBAL_ID,
    SCHEMA_PRIMITIVE_SET,
    SCHEMA_ENUMERATION,
    SCHEMA_NUMBER,
    SCHEMA_INTEGER,
    SCHEMA_BOOL,
    SCHEMA_TEXT,
    SCHEMA_URL,
    SCHEMA_DATETIME,
    SCHEMA_DATE,
    SCHEMA_TIME
} from "./Constants";
import {isObjectLiteral, isUrl} from "./Utils";

const DATE_FORMAT_REGEX = /^\d{4}-\d{1,2}-\d{1,2}$/;
const TIME_FORMAT_REGEX = /^\d{1,2}:\d{1,2}(:\d{1,2})?$/;

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
        const jsonld = jsonToJsonLd(json, context);
        return await jsonld.resolveJson(fetcher);
    }
    return json;
}

export function bundleSchemaOrgJsonLd(json: object) {
    const schemaOrgJsonLds = [];
    getTopLevelSchemaOrgJsonLd(json, schemaOrgJsonLds);
    if (schemaOrgJsonLds.length === 0) {
        return null;
    }
    const jsonLd = new JsonLd(schemaOrgJsonLds, SCHEMA_CONTEXT);
    const graph: Map<string, object> = jsonLd.flatten();
    return {
        [JSONLD_CONTEXT]: SCHEMA_CONTEXT,
        [JSONLD_GRAPH]: [...graph.values()]
    };
}

function getTopLevelSchemaOrgJsonLd(json: any, schemaOrgJsonLds: any[]) {
    if (Array.isArray(json)) {
        json.forEach(item => getTopLevelSchemaOrgJsonLd(item, schemaOrgJsonLds));
    } else if (isObjectLiteral(json)) {
        if (json[JSONLD_TYPE]) {
            const typeId = `${SCHEMA_CONTEXT}/${json[JSONLD_TYPE]}`;
            if (isSchemaOrgType(typeId)) {
                schemaOrgJsonLds.push(json);
                return; // No need to recurse into schema.org json
            }
        }
        for (const propName of Object.keys(json)) {
            const propValue = json[propName];
            getTopLevelSchemaOrgJsonLd(propValue, schemaOrgJsonLds);
        }
    }
}

export function toSchemOrgJsonLd(json: object, type: string, context?: any) {
    const typeId = `${SCHEMA_CONTEXT}/${type}`;
    if (!isSchemaOrgType(typeId)) {
        throw new Error(`schema.org ${type} not found`);
    }
    const schema = getSchemaOrgType(typeId);
    const typeName = schema[SAMBAL_NAME];
    const parents = [];
    getParentTypes(schema, parents);
    
    const jsonld = jsonToJsonLd(json, context ? context : SCHEMA_CONTEXT, typeName);
    const schemaOrgJsonLd = {
        [JSONLD_CONTEXT]: SCHEMA_CONTEXT,
        [JSONLD_TYPE]: typeName,
        [JSONLD_ID]: json[JSONLD_ID]
    };
    if (!schemaOrgJsonLd[JSONLD_ID]) {
        delete schemaOrgJsonLd[JSONLD_ID];
    }
    if (context === SCHEMA_CONTEXT) {
        delete schemaOrgJsonLd[JSONLD_CONTEXT];
    }
    populateSchemaProps(schemaOrgJsonLd, jsonld, schema);
    for (const parentSchema of parents) {
        populateSchemaProps(schemaOrgJsonLd, jsonld, parentSchema);
    }
    return schemaOrgJsonLd;
}

function jsonToJsonLd(json: object, context?: any, type?: any) {
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

function populateSchemaProps(schemaOrgJsonLd: object, json: JsonLd, schema: any) {
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
    } else if (isObjectLiteral(value)) {
        const classTypeName = getClassTypeName(value, propTypes);
        // possible not to have a class type
        if (classTypeName) {
            return toSchemOrgJsonLd(value, classTypeName, SCHEMA_CONTEXT);
        }
    } else if (value) {
        return validatePrimitiveType(value, propTypes);
    }
    return null;
}

function validatePrimitiveType(value: any,  propTypes: string[]) {
    const valueType = getPrimitiveType(value);
    if (!valueType) {
        console.error(`Unknown primitive type for value: ${value}`);
        return null;
    }
    switch (valueType) {
        case SCHEMA_DATETIME:
            return validateDate(value, propTypes);
        case SCHEMA_NUMBER:
            return validateNumber(value, propTypes);
        case SCHEMA_TEXT:
            return validateString(value, propTypes);
        default:
            return propTypes.indexOf(valueType) >= 0 ? value : null;
    }
}

function validateDate(value: Date, propTypes: string[]) {
    const isAllowDateTime = propTypes.indexOf(SCHEMA_DATETIME) >= 0;
    const isAllowDate = propTypes.indexOf(SCHEMA_DATE) >= 0;
    const isAllowTime = propTypes.indexOf(SCHEMA_TIME) >= 0;
    if (isAllowDateTime) {
        return moment(value).toISOString();
    } else if (isAllowDate) {
        return moment(value).format("YYYY-MM-DD");
    } else if (isAllowTime) {
        return moment(value).format("HH:mm:ss");
    }
    return null;
}

function validateNumber(value: number, propTypes: string[]) {
    const isAllowNumber = propTypes.indexOf(SCHEMA_NUMBER) >= 0;
    const isAllowInteger = propTypes.indexOf(SCHEMA_INTEGER) >= 0;
    if (isAllowNumber || (isAllowInteger && Number.isInteger(value))) {
        return value;
    }
    return null;
}

function validateString(value: string, propTypes: string[]) {
    const isAllowDateTime = propTypes.indexOf(SCHEMA_DATETIME) >= 0;
    const isAllowDate = propTypes.indexOf(SCHEMA_DATE) >= 0;
    const isAllowTime = propTypes.indexOf(SCHEMA_TIME) >= 0;
    if (isAllowDateTime || isAllowDate || isAllowTime) {
        const d = moment(value, moment.ISO_8601);
        if (!d.isValid()) {
            return null;
        }
        if ((isAllowDate && DATE_FORMAT_REGEX.test(value)) || (isAllowTime && TIME_FORMAT_REGEX.test(value))) {
            return value;
        }  
        return validateDate(d.toDate(), propTypes);
    }
    return value;
}

function getPrimitiveType(value: any) {
    const typeOf = typeof(value);
    if (moment.isDate(value)) {
        return SCHEMA_DATETIME;
    } else if (typeOf === "number") {
        return SCHEMA_NUMBER;
    } else if (typeOf === "boolean") {
        return SCHEMA_BOOL;
    } else if (typeOf === "string") {
        if (isUrl(value)) {
            return SCHEMA_URL;
        }
        return SCHEMA_TEXT;
    }
    return null; // should not happen
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
