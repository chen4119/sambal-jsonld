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
    
        it("has 2 objects in graph", () => {
            const graph = toJsonLdGraph([blogPost], SCHEMA_CONTEXT);
            expect(graph).toMatchSnapshot();
        });

    });

    describe('Nested object without @id', () => {
        const website = {
            "@id": "https://example.com",
            "@type": "Website",
            headline: "My site",
            hasPart: [
                {
                    "@id": "header",
                    "@type": "WPHeader",
                    hasPart: [
                        {
                            "@type": "SiteNavigationElement",
                            name: "About",
                            url: "/about"
                        },
                        {
                            "@type": "SiteNavigationElement",
                            name: "Docs",
                            url: "/docs"
                        }
                    ]
                }
            ]
        };
    
        it("SiteNavigationElement has no @id so not flatten in graph", () => {
            const graph = toJsonLdGraph([website], SCHEMA_CONTEXT);
            expect(graph).toMatchSnapshot();
        });

    });

});
