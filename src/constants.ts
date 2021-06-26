export const JSONLD_CONTEXT = "@context";
export const JSONLD_TYPE = "@type";
export const JSONLD_ID = "@id";
export const JSONLD_GRAPH = "@graph";
export const JSONLD_VALUE = "@value";
export const JSONLD_BASE = "@base";

export const SCHEMA_CONTEXT = "https://schema.org";

export const SAMBAL_NAME = "_name";
export const SAMBAL_PARENT = "_parent";
export const SAMBAL_VALUES = "_values";

// Schema.org datatypes
export const SCHEMA_TEXT = `${SCHEMA_CONTEXT}/Text`;
export const SCHEMA_CSS_SELECTOR = `${SCHEMA_CONTEXT}/CssSelectorType`;
export const SCHEMA_XPATH = `${SCHEMA_CONTEXT}/XPathType`;

export const SCHEMA_NUMBER = `${SCHEMA_CONTEXT}/Number`;
export const SCHEMA_INTEGER = `${SCHEMA_CONTEXT}/Integer`;
export const SCHEMA_FLOAT = `${SCHEMA_CONTEXT}/Float`;

export const SCHEMA_DATE = `${SCHEMA_CONTEXT}/Date`;
export const SCHEMA_DATETIME = `${SCHEMA_CONTEXT}/DateTime`;
export const SCHEMA_TIME = `${SCHEMA_CONTEXT}/Time`;
export const SCHEMA_BOOL = `${SCHEMA_CONTEXT}/Boolean`;
export const SCHEMA_URL = `${SCHEMA_CONTEXT}/URL`;

export const SCHEMA_PRIMITIVE_SET = new Set([
    SCHEMA_TEXT,
    SCHEMA_CSS_SELECTOR,
    SCHEMA_XPATH,
    SCHEMA_NUMBER,
    SCHEMA_INTEGER,
    SCHEMA_FLOAT,
    SCHEMA_DATE,
    SCHEMA_DATETIME,
    SCHEMA_TIME,
    SCHEMA_BOOL,
    SCHEMA_URL
]);

export const SCHEMA_ENUMERATION = `${SCHEMA_CONTEXT}/Enumeration`;
