import {expandJsonLd} from "../../src/operators/expandJsonLd";
import {SCHEMA_CONTEXT, JSONLD_CONTEXT, JSONLD_ID} from "../../src/constants";

describe('expandJsonLd', () => {
    
    describe('BlogPost', () => {
        const blogPost = {
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
            dateCreated: "2019-09-06",
            keywords: ["schema.org"]
        };
    
        it("expand blogpost", () => {
            const expandedJsonLd = expandJsonLd(blogPost);
            expect(expandedJsonLd).toMatchSnapshot();
        });

    });

});
