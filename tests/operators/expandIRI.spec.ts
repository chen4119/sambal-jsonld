import {expandUri} from "../../src/operators/expandUri";
import {JSONLD_CONTEXT, SCHEMA_CONTEXT} from "../../src/constants";

describe('expandUri', () => {
    
    const baseUrl = "https://sambal.dev";

    it("append @base to relative iri", () => {
        const jsonld = {
            [JSONLD_CONTEXT]: {
                "@base": "https://example.com/"
            },
            headline: "My first blog",
            author: {
                "@id": "/johnsmith/schema.json"
            }
        };
        const result = expandUri(jsonld, baseUrl);
        expect(result.author["@id"]).toBe("https://example.com/johnsmith/schema.json");
    });

    it("Use baseUrl if no @base", () => {
        const jsonld = {
            [JSONLD_CONTEXT]: SCHEMA_CONTEXT,
            headline: "My first blog",
            author: {
                "@id": "/johnsmith/schema.json"
            }
        };
        const result = expandUri(jsonld, baseUrl);
        expect(result.author["@id"]).toBe(`${baseUrl}/johnsmith/schema.json`);
    });

    it("works for array", () => {
        const jsonld = {
            [JSONLD_CONTEXT]: {
                "@base": "https://example.com/"
            },
            headline: "My first blog",
            author: [
                {
                    "@id": "/author1"
                },
                {
                    "@id": "/author2"
                }
            ]
        };
        const result = expandUri(jsonld, baseUrl);
        expect(result.author[0]["@id"]).toBe("https://example.com/author1");
        expect(result.author[1]["@id"]).toBe("https://example.com/author2");
    });

    it("Ignore absolute uri", () => {
        const jsonld = {
            [JSONLD_CONTEXT]: {
                "@base": "https://example.com/"
            },
            headline: "My first blog",
            author: {
                "@id": "https://something.com/johnsmith/schema.json"
            }
        };
        const result = expandUri(jsonld, baseUrl);
        expect(result.author["@id"]).toBe("https://something.com/johnsmith/schema.json");
    });

    it("Do nothing if no base url", () => {
        const jsonld = {
            [JSONLD_CONTEXT]: SCHEMA_CONTEXT,
            headline: "My first blog",
            author: {
                "@id": "/johnsmith/schema.json"
            }
        };
        const result = expandUri(jsonld);
        expect(result.author["@id"]).toBe("/johnsmith/schema.json");
    });

});
