import {expandJsonLd} from "../../src/operators/expandJsonLd";
import {SCHEMA_CONTEXT, JSONLD_CONTEXT, JSONLD_ID} from "../../src/constants";

describe('expandJsonLd', () => {
    
    const jsonld = {
        [JSONLD_CONTEXT]: SCHEMA_CONTEXT,
        [JSONLD_ID]: "blogpost",
        headline: "Fourth post",
        description: "Some description",
        author: {
            [JSONLD_ID]: "author",
            "name": "Jane Doe",
            "telephone": "(425) 123-4567",
            "url": "http://www.janedoe.com"
        },
        publisher: {
            [JSONLD_ID]: "https://publisher.com/about"
        },
        dateCreated: "2019-09-06",
        keywords: ["schema.org"]
    };

    it("null return null", () => {
        expect(expandJsonLd(null)).toBeNull();
    });

    it("string return null", () => {
        expect(expandJsonLd("testing")).toBeNull();
    });

    it("number return null", () => {
        expect(expandJsonLd(34)).toBeNull();
    });


    it("expand jsonld", () => {
        const expandedJsonLd = expandJsonLd(jsonld);
        expect(expandedJsonLd).toMatchSnapshot();
    });

    it("expand jsonld without id", () => {
        const jsonldNoId = {
            ...jsonld
        };
        delete jsonldNoId[JSONLD_ID];
        const expandedJsonLd = expandJsonLd(jsonldNoId);
        expect(expandedJsonLd).toMatchSnapshot();
    });

    it("expand jsonld array", () => {
        const expandedJsonLd = expandJsonLd([jsonld, jsonld]);
        expect(expandedJsonLd).toMatchSnapshot();
    });

});
