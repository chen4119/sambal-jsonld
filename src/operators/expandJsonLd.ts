import JsonLd from "../JsonLd";
import {
    JSONLD_ID
} from "../constants";
import {isObjectLiteral} from "../utils";

const TOP_LEVEL_BLANK_NODE_ID = "_:1";

export function expandJsonLd(jsonld: unknown) {
    if (!jsonld || (!isObjectLiteral(jsonld) && !Array.isArray(jsonld))) {
        return null;
    }
    if (Array.isArray(jsonld)) {
        return jsonld.map(j => expandSingleJsonLd(j));
    }
    return expandSingleJsonLd(jsonld);
}

function expandSingleJsonLd(jsonld: unknown) {
    const jsonLd = new JsonLd(jsonld);
    const id = jsonld[JSONLD_ID] ? jsonld[JSONLD_ID] : TOP_LEVEL_BLANK_NODE_ID;
    return jsonLd.getNode(id, true, true);
}