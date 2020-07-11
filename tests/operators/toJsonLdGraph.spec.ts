import {toJsonLdGraph} from "../../src/operators/toJsonLdGraph";
import {SCHEMA_CONTEXT, JSONLD_ID} from "../../src/constants";

describe('toJsonLdGraph', () => {
    
    describe('BlogPost', () => {
        const blogPost = {
            headline: "Fourth post",
            description: "Some description",
            author: {
                "@id": "fasdf",
                "name": "Jane Doe",
                "telephone": "(425) 123-4567",
                "url": "http://www.janedoe.com"
            },
            dateCreated: "2019-09-06",
            keywords: ["schema.org"]
        };
    
        it("to schema.org", () => {
            const graph = toJsonLdGraph([blogPost], SCHEMA_CONTEXT);
            expect(graph).toMatchSnapshot();
        });

    });

});
