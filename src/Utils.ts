

export function isObjectLiteral(obj: any) {
    return typeof(obj) === "object" && Object.getPrototypeOf(obj) === Object.prototype;
}

export function isUrl(src: string) {
    if (!src) {
        return false;
    }
    return src.toLowerCase().startsWith("http://") || src.toLowerCase().startsWith("https://");
}
