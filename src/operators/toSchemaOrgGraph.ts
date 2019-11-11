import JsonLd from "../JsonLd";
import {
    SCHEMA_CONTEXT,
    JSONLD_CONTEXT,
    JSONLD_GRAPH
} from "../Constants";

export function toSchemaOrgGraph(schemaOrgJsonLds: object[]) {
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