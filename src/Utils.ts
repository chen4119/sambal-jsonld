import {schemaMap} from "./Schema";
import JsonLd from "./JsonLd";
import {
    SAMBAL_PARENT,
    SCHEMA_CONTEXT,
    JSONLD_CONTEXT,
    JSONLD_TYPE,
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

export function hydrateJson(json: any, context?: any) {

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
    
    const jsonld = jsonToJsonLd(json, SCHEMA_CONTEXT, typeName);
    let schemaOrgJsonLd;
    if (context === SCHEMA_CONTEXT) {
        schemaOrgJsonLd = {
            [JSONLD_TYPE]: typeName
        };
    } else {
        schemaOrgJsonLd = {
            [JSONLD_CONTEXT]: context === SCHEMA_CONTEXT,
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
    // const termId = `${SCHEMA_CONTEXT}/${propName}`;
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

/*
export function validateJsonLd(jsonLd: any, parentContext?: string) {
    let context = getJsonContext(jsonLd);
    context = context ? context : parentContext;
    let type = getJsonType(jsonLd);
    type = type ? type : null;
    const schemaId = `${context}/${type}`.toLowerCase();
    if (schemaMap.has(schemaId)) {
        const schema = schemaMap.get(schemaId);
        const parents = [];
        getParentTypes(schema, parents);
        const validatedJsonLd: any = {
            [JSONLD_TYPE]: schema["_id"]
        };
        if (context !== parentContext) {
            validatedJsonLd[JSONLD_CONTEXT] = context;
        }
        buildValidatedJsonLd(validatedJsonLd, jsonLd, context, schema);
        for (const parentSchema of parents) {
            buildValidatedJsonLd(validatedJsonLd, jsonLd, context, parentSchema);
        }
        return validatedJsonLd;
    }
    return null;
}

function buildValidatedJsonLd(validatedJsonLd: object, jsonLd: object, context: string, schema: object) {
    for (const key of Object.keys(schema)) {
        if (key.startsWith("_")) {
            continue;
        }
        const value = jsonLd[key];
        const possibleTypes = schema[key];
        const validatedValue = getValidatedProp(context, value, possibleTypes);
        if (validatedValue !== null) {
            validatedJsonLd[key] = validatedValue;
        }
    }
}

function getValidatedProp(context: string, propValue: any, possibleTypes: string[]) {
    if (typeof(propValue) !== "undefined" && propValue !== null) {
        if (Array.isArray(propValue)) {
            const validatedArray = [];
            for(let i = 0; i < propValue.length; i++) {
                validatedArray.push(getValidatedProp(context, propValue[i], possibleTypes));
            }
            return validatedArray;
        } else if (typeof(propValue) === "object" && !moment.isDate(propValue)) {
            const jsonLd = findJsonLd(propValue, context);
            return jsonLd ? validateJsonLd(jsonLd, context) : null;
        } 
        
        const isDateType = isType(SCHEMA_DATE, possibleTypes);
        const isTimeType = isType(SCHEMA_TIME, possibleTypes);
        const isDateTimeType = isType(SCHEMA_DATETIME, possibleTypes);
        if (isDateType || isTimeType || isDateTimeType) {
            const d = moment.isDate(propValue) ? moment(propValue) : moment(propValue, moment.ISO_8601);
            if (d.isValid()) {
                if (isDateType && (!isDateTimeType || DATE_FORMAT_REGEX.test(propValue))) {
                    return d.format('YYYY-MM-DD');
                } else if (isTimeType && (!isDateTimeType || TIME_FORMAT_REGEX.test(propValue))) {
                    return d.format('hh:mm:ss');
                }
                return d.toISOString();
            }
        }
        return propValue;
    }
    return null;
}*/

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
