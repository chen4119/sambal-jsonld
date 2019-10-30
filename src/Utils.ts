

export function isObjectLiteral(obj: any) {
    return typeof(obj) === "object" && Object.getPrototypeOf(obj) === Object.prototype;
}

export function isUrl(src: string) {
    if (!src) {
        return false;
    }
    return src.toLowerCase().startsWith("http://") || src.toLowerCase().startsWith("https://");
}

export function makeAbsoluteIRI(base: string, relativeIRI: string) {
    if (base.endsWith("#") || base.endsWith("/")) {
        return `${base}${relativeIRI}`;
    }
    return `${base}/${relativeIRI}`;
}

export function isBlankNodeIRI(iri: string) {
    return iri.startsWith("_:");
}
