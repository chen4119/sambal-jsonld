import {graphToCondensedJsonLd} from "../../src/operators/graphToCondensedJsonLd";
import {SCHEMA_CONTEXT, JSONLD_ID} from "../../src/constants";

describe('graphToCondensedJsonLd', () => {
    
    const graph = {
        "@context": "http://schema.org",
        "@graph": [
            {
            "@type": "Person",
            "familyName": "Chen",
            "gender": "Male",
            "givenName": "Wan Chun",
            "name": "Wan Chun Chen",
            "sameAs": [
                "https://github.com/chen4119",
                "https://www.linkedin.com/in/wan-chun-chen-9a95a010"
            ],
            "url": "https://chen4119.me/about.html",
            "@id": "https://chen4119.me/about.html#about"
            },
            {
                "@id": "http://chen4119.me/post2",
                "@type": "BlogPosting",
                headline: "Second post",
                description: "Some description",
                author: {
                    "@id": "http://www.janedoe.com/about",
                    "@type": "Person",
                    "name": "Jane Doe",
                    "telephone": "(425) 123-4567"
                },
                dateCreated: "2019-09-06",
                keywords: ["schema.org"]
            }
        ]
    };

    it("has 2 jsonld", () => {
        const json = graphToCondensedJsonLd(graph);
        expect(json).toMatchSnapshot();
    });

    it("gets Jane Doe jsonld", () => {
        const json = graphToCondensedJsonLd(graph, "http://www.janedoe.com/about");
        expect(json).toMatchSnapshot();
    });

    it("return null", () => {
        const json = graphToCondensedJsonLd(graph, "abc");
        expect(json).toBeNull();
    });

});
