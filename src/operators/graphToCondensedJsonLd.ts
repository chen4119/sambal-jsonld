import JsonLd from "../JsonLd";
import {
    JSONLD_GRAPH
} from "../constants";
import {isObjectLiteral} from "../utils";

export function graphToCondensedJsonLd(jsonldGraph: object, id?: string) {
    if (isObjectLiteral(jsonldGraph) && jsonldGraph[JSONLD_GRAPH]) {
        const jsonld = new JsonLd(jsonldGraph);
        if (id) {
            return jsonld.getCondensedNode(id, true);
        }
        return jsonld.getGraphRootNodes();
    }
    return null;
}