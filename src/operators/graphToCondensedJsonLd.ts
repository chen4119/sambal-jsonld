import JsonLd from "../JsonLd";
import {
    JSONLD_GRAPH
} from "../Constants";
import {isObjectLiteral} from "../Utils";

export function graphToCondensedJsonLd(json: object, id?: string) {
    if (isObjectLiteral(json) && json[JSONLD_GRAPH]) {
        const jsonld = new JsonLd(json);
        if (id) {
            return jsonld.getCondensedNode(id, true);
        }
        return jsonld.getGraphRootNodes();
    }
    return null;
}