import JsonLd from "../JsonLd";
import {
    JSONLD_GRAPH
} from "../constants";
import {isObjectLiteral} from "../utils";

export function graphToCondensedJsonLd(jsonldGraph: unknown, id?: string) {
    if (isObjectLiteral(jsonldGraph) && jsonldGraph[JSONLD_GRAPH]) {
        const jsonld = new JsonLd(jsonldGraph);
        if (id) {
            return jsonld.getNode(id, true);
        }
        return jsonld.getGraphRootNodes();
    }
    return null;
}