import moment from 'moment';
import JsonLd, {Node} from "../JsonLd";
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
} from "../Constants";
import {
    isSchemaOrgType,
    getSchemaOrgType,
    getSchemaOrgParentTypes,
    getParentTypes,
    isUrl,
    makeAbsoluteIRI,
    isBlankNodeIRI
} from "../Utils";

const DATE_FORMAT_REGEX = /^\d{4}-\d{1,2}-\d{1,2}$/;
const TIME_FORMAT_REGEX = /^\d{1,2}:\d{1,2}(:\d{1,2})?$/;

export function toSchemaOrgJsonLd(json: object, type: string, context?: any) {
    const typeId = `${SCHEMA_CONTEXT}/${type}`;
    if (!isSchemaOrgType(typeId)) {
        throw new Error(`schema.org ${type} not found`);
    }
    const jsonld = new JsonLd(json, context ? [SCHEMA_CONTEXT, context] : SCHEMA_CONTEXT);
    let nodeId;
    if (json[JSONLD_ID]) {
        nodeId = json[JSONLD_ID];
    } else {
        nodeId = '_:1';
    }
    if (jsonld.graphMap.has(nodeId)) {
        const node = jsonld.graphMap.get(nodeId);
        return {
            [JSONLD_CONTEXT]: SCHEMA_CONTEXT,
            ...nodeToSchemaOrgType(node, type, jsonld.baseIRI)
        };
    }
    return null;
}

function getSchemaOrgProps(schema, typeProps) {
    for (const propName of Object.keys(schema)) {
        if (propName.startsWith("_")) {
            continue;
        }
        const propId = `${SCHEMA_CONTEXT}/${propName}`;
        typeProps[propId] = {
            name: propName,
            types: schema[propName]
        };
    }
}

function nodeToSchemaOrgType(node: Node, type: string, baseIRI: string) {
    const typeId = `${SCHEMA_CONTEXT}/${type}`;
    const typeSchema = getSchemaOrgType(typeId);
    const typeName = typeSchema[SAMBAL_NAME];
    const parents = [];
    getParentTypes(typeSchema, parents);
    const typeProps = {};
    getSchemaOrgProps(typeSchema, typeProps);
    for (const parentSchema of parents) {
        getSchemaOrgProps(parentSchema, typeProps);
    }
    return populateSchemaOrgType(node, typeName, typeProps, baseIRI);
}

function populateSchemaOrgType(node: Node, typeName: string, typeProps: object, baseIRI: string) {
    const schemaOrgJsonLd = {
        [JSONLD_TYPE]: typeName
    };
    if (node.data[JSONLD_ID]) {
        schemaOrgJsonLd[JSONLD_ID] = getAbsoluteNodeID(baseIRI, node.data[JSONLD_ID]);
    }
    for (const link of node.links) {
        const prop = typeProps[link.edge];
        if (prop) {
            const hasChildNode = link.node.links.length > 0;
            let propValue = null;
            if (hasChildNode) {
                const classTypeName = getClassTypeName(link.node.data, prop.types);
                // possible not to have a class type
                if (classTypeName) {
                    propValue = nodeToSchemaOrgType(link.node, classTypeName, baseIRI);
                }
            } else if (typeof(link.node.data) !== "undefined" && link.node.data !== null) {
                propValue = validatePrimitiveType(link.node.data, prop.types);
            }
            setSchemaOrgPropValue(schemaOrgJsonLd, prop.name, propValue, link.node.isArray);
        }
    }
    return schemaOrgJsonLd;
}

function getAbsoluteNodeID(baseIRI: string, nodeId: string) {
    if (isUrl(nodeId)) {
        return nodeId;
    }
    if (baseIRI && !isBlankNodeIRI(nodeId)) {
        return makeAbsoluteIRI(baseIRI, nodeId);
    }
    return nodeId;
}

function setSchemaOrgPropValue(schemaOrgJsonLd: object, propName: string, propValue: any, isArray: boolean) {
    if (propValue) {
        if (isArray) {
            schemaOrgJsonLd[propName] = Array.isArray(schemaOrgJsonLd[propName]) ? [...schemaOrgJsonLd[propName], propValue] : [propValue];
        } else {
            schemaOrgJsonLd[propName] = propValue;
        }
    }
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
        const typeId = `${SCHEMA_CONTEXT}/${json[JSONLD_TYPE]}`;
        for (const validTypeId of propTypes) {
            const isDescendant = isDescendantOf(typeId, validTypeId);
            if (isDescendant) {
                return json[JSONLD_TYPE];
            }
        }
        return null;
    }
    for (const typeId of propTypes) {
        if (!SCHEMA_PRIMITIVE_SET.has(typeId) && !isEnumeration(typeId)) {
            return getSchemaOrgType(typeId)[SAMBAL_NAME];
        }
    }
    return null;
}

function isDescendantOf(schemaTypeId: string, parentTypeId: string) {
    if (schemaTypeId.toLowerCase() === parentTypeId.toLowerCase()) {
        return true;
    }
    if (isSchemaOrgType(schemaTypeId) && isSchemaOrgType(parentTypeId)) {
        const schema = getSchemaOrgType(schemaTypeId);
        const parents = [];
        getParentTypes(schema, parents);
        for (const parentSchema of parents) {
            if (parentSchema[SAMBAL_ID] === parentTypeId) {
                return true;
            }
        }
    }
    return false;
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
