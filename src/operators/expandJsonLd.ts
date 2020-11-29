import JsonLd from "../JsonLd";
import {
    JSONLD_ID
} from "../constants";

export function expandJsonLd(jsonld: unknown) {
    const jsonLd = new JsonLd(jsonld);
    return jsonLd.getNode(jsonld[JSONLD_ID], true, true);
}