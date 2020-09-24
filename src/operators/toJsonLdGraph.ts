import JsonLd from "../JsonLd";
import {
    JSONLD_CONTEXT,
    JSONLD_GRAPH
} from "../constants";

export function toJsonLdGraph(jsonlds: unknown[], context: any) {
    if (jsonlds.length === 0) {
        return null;
    }
    const jsonLd = new JsonLd(jsonlds, context);
    const graph: Map<string, unknown> = jsonLd.flatten();
    return {
        [JSONLD_CONTEXT]: context,
        [JSONLD_GRAPH]: [...graph.values()]
    };
}