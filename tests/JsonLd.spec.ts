import JsonLd from "../src/JsonLd";
import {SCHEMA_CONTEXT, JSONLD_ID} from "../src/constants";

describe('Parse graph', () => {
    const graph = {
        "@context": {
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
            "xsd": "http://www.w3.org/2001/XMLSchema#"
        },
        "@graph": [
            {
                "@id": "http://schema.org/prop1",
                "@type": "rdf:Property",
                "http://schema.org/domainIncludes": {
                    "@id": "http://schema.org/entity1"
                },
                "http://schema.org/isPartOf": {
                    "@id": "http://health-lifesci.schema.org"
                },
                "http://schema.org/rangeIncludes": [{
                    "@id": "http://schema.org/Text"
                }, {
                    "@id": "http://schema.org/Number"
                }],
                "rdfs:comment": "Comment about property 1",
                "rdfs:label": "Property 1"
            },
            {
                "@id": "http://schema.org/entity1",
                "@type": "rdfs:Class",
                "rdfs:subClassOf": {
                    "@id": "http://schema.org/root"
                },
                "rdfs:comment": "Comment about entity 1",
                "rdfs:label": "Entity 1"
            },
            {
                "@id": "http://schema.org/root",
                "@type": "rdfs:Class",
                "rdfs:comment": "Comment about root",
                "rdfs:label": "Root entity"
            }
        ]
    };

    it('add entries to map', () => {
        const jsonld = new JsonLd(graph);
        expect(jsonld.graphMap.size).toBe(3);
        expect(jsonld.graphMap.has("http://schema.org/entity1")).toBeTruthy();
        expect(jsonld.graphMap.has("http://schema.org/prop1")).toBeTruthy();
        expect(jsonld.graphMap.has("http://schema.org/root")).toBeTruthy();
    });

    describe('prop1', () => {
        let prop1;
        beforeEach(() => {
            const jsonld = new JsonLd(graph);
            prop1 = jsonld.graphMap.get("http://schema.org/prop1");
        });

        it('has links and data', () => {
            expect(prop1.links.length).toBe(6);
            expect(prop1.data["@id"]).toBe("http://schema.org/prop1");
            expect(prop1.data["@type"]).toBe("rdf:Property");
        });

        it("http://schema.org/domainIncludes", () => {
            const link = prop1.links.find(d => d.edge === "http://schema.org/domainIncludes");
            expect(link).toBeDefined();
            expect(link.node.id).toBe("http://schema.org/entity1");
        });

        it("http://schema.org/rangeIncludes", () => {
            const links = prop1.links.filter(d => d.edge === "http://schema.org/rangeIncludes");
            expect(links.length).toBe(2);
            expect(links[0].node.isArray).toBeTruthy();
            expect(links[1].node.isArray).toBeTruthy();
        });
    });

});

describe('BlogPost schema jsonld', () => {
    const blogPost = {
        headline: "Fourth post",
        description: "Some description",
        author: {
            "@id": "fasdf",
            "name": "Jane Doe",
            "givenName": "Wan Chun",
            "telephone": "(425) 123-4567",
            "url": "http://www.janedoe.com"
        },
        dateCreated: "2019-09-06",
        keywords: ["schema.org"]
    };

    it("can flatten", () => {
        const jsonld = new JsonLd(blogPost, SCHEMA_CONTEXT);
        const entityMap = jsonld.flatten();
        expect(entityMap.get("_:1")).toBeDefined();
        expect(entityMap.get("fasdf")).toBeDefined();
    });

    it("blog point reference author by id", () => {
        const jsonld = new JsonLd(blogPost, SCHEMA_CONTEXT);
        const entityMap = jsonld.flatten();
        expect(entityMap.get("_:1")['author'][JSONLD_ID]).toBe("fasdf");
    });
});

describe('ItemList schema jsonld', () => {
    const list = {
        "@context": "http://schema.org",
        "@type": "ItemList",
        "url": "http://multivarki.ru?filters%5Bprice%5D%5BLTE%5D=39600",
        "numberOfItems": "2",
        "itemListElement": [
            {
                "@id": "http://chen4119.me/post1",
                "@type": "BlogPosting",
                headline: "First post",
                description: "Some description",
                author: {
                    "@id": "http://chen4119.me/about",
                    "@type": "Person",
                    "name": "Jane Doe",
                    "givenName": "Wan Chun",
                    "telephone": "(425) 123-4567",
                    "url": "http://www.janedoe.com"
                },
                dateCreated: "2019-09-06",
                keywords: ["schema.org"]
            },
            {
                "@id": "http://chen4119.me/post2",
                "@type": "BlogPosting",
                headline: "Second post",
                description: "Some description",
                author: {
                    "@id": "http://chen4119.me/about",
                    "@type": "Person",
                    "name": "Jane Doe",
                    "givenName": "Wan Chun",
                    "telephone": "(425) 123-4567",
                    "url": "http://www.janedoe.com"
                },
                dateCreated: "2019-09-06",
                keywords: ["schema.org"]
            }
        ]
    };

    it("flatten without duplicating http://chen4119.me/about", () => {
        const jsonld = new JsonLd(list);
        const entityMap = jsonld.flatten();
        expect(entityMap.size).toBe(4);
        expect(entityMap.get("http://chen4119.me/post1")).toBeDefined();
        expect(entityMap.get("http://chen4119.me/post2")).toBeDefined();
        expect(entityMap.get("http://chen4119.me/about")).toBeDefined();
        expect(entityMap.get("_:1")).toBeDefined();
    });

});
