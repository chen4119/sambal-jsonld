import fs from "fs";
import JsonLd from "./JsonLd";
import {JSONLD_TYPE} from "./Constants";
import SchemaGenerator from "./SchemaGenerator";
import {toSchemaOrgJsonLd, hydrateJsonLd, toSchemaOrgGraph, graphToCondensedJsonLd} from "./index";
import {isObjectLiteral} from "./Utils";
// const generator = new SchemaGenerator("./all-layers.jsonld", "./src/Schema.ts");
// generator.run();

const person = {
    "name": "Jane Doe",
    "givenName": "Wan Chun",
    "telephone": "(425) 123-4567",
    "url": "http://www.janedoe.com"
};

const urlList = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    "url": "http://multivarki.ru?filters%5Bprice%5D%5BLTE%5D=39600",
    "numberOfItems": "315",
    "itemListElement": [
        {
            "@type": "ListItem",
            position: 1,
            url: "http://www.janedoe2.com"
        },
        {
            "@type": "ListItem",
            position: 2,
            url: "http://www.janedoe.com"
        }
    ]
};

const itemList = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    "url": "http://multivarki.ru?filters%5Bprice%5D%5BLTE%5D=39600",
    "numberOfItems": "315",
    "itemListElement": [
        {
            "@type": "ListItem",
            position: 1,
            item: {
                "@type": "BlogPosting",
                headline: "Fourth post",
                description: "Some description",
                author: {
                    "@type": "Person",
                    "name": "Jane Doe",
                    "givenName": "Wan Chun",
                    "telephone": "(425) 123-4567",
                    "url": "http://www.janedoe.com"
                },
                dateCreated: "2019-09-06",
                keywords: ["schema.org"]
            }
        }
    ]
};

const list = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    "url": "http://multivarki.ru?filters%5Bprice%5D%5BLTE%5D=39600",
    "numberOfItems": "315",
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

const blogPostIncomplete = {
    headline: "Fourth post",
    description: "Some description",
    author: {
        "@id": "https://chen4119.me/about.html#about"
    },
    dateCreated: "2019-09-06",
    keywords: ["schema.org"]
};

const person2 = {
    "name": "Jane Doe",
    "firstName": "Wan Chun",
    "telephone": "(425) 123-4567",
    "url": "http://www.janedoe.com"
};

const graph = {
    "@context": "http://schema.org",
    "@graph": [
        {
        "@type": "Person",
        "email": "chen4119@hotmail.com",
        "familyName": "Chen",
        "gender": "Male",
        "givenName": "Wan Chun",
        "description": "Javascript developer.  Making linked data useful.",
        "name": "Wan Chun Chen",
        "sameAs": [
            "https://github.com/chen4119",
            "https://www.linkedin.com/in/wan-chun-chen-9a95a010"
        ],
        "url": "https://chen4119.me/about.html",
        "@id": "https://chen4119.me/about.html#about"
        }
    ]
};

// const js = new JsonLd(list);
// console.log(js.flatten().values());

// console.log(toSchemaOrgGraph([blogPost])['@graph']);

// const linkedin = JSON.parse(fs.readFileSync("./src/linkedin.json", "utf-8"));
// console.log(toSchemaOrgGraph(linkedin)['@graph'][0]);
// console.log(graphToCondensedJsonLd(linkedin));

/*
(async () => {
    const result = await hydrateJsonLd(blogPostIncomplete, async (url) => {
        return [graph];
    });
    console.log(result);
})();
*/

// console.log(toSchemaOrgJsonLd(blogPost, "BlogPosting", {'@base': 'http://chen4119.me#'}));
// console.log(toSchemaOrgJsonLd(itemList, "ItemList"));
// console.log(toSchemaOrgJsonLd(person2, "Person", {firstName: "http://schema.org/givenName"}));

/*
const content = fs.readFileSync("./all-layers.jsonld", "utf-8");
const schema = JSON.parse(content);

const js = new JsonLd(schema);
for (const key of js.graphMap.keys()) {
    const node = js.graphMap.get(key);
    if (key === "http://schema.org/Playground") {
        console.log(node);
    }
    if (node.data[JSONLD_TYPE] === "rdfs:Class") {
        console.log(key);
    }
}*/