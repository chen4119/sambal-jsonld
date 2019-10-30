import fs from "fs";
import JsonLd from "./JsonLd";
import {JSONLD_TYPE} from "./Constants";
import SchemaGenerator from "./SchemaGenerator";
import {toSchemaOrgJsonLd, hydrateJsonLd} from "./Operators";
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
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            headline: "Fourth post",
            description: "Some description",
            author: {
                "@context": "http://schema.org",
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
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            headline: "Fourth post",
            description: "Some description",
            author: {
                "@context": "http://schema.org",
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
    "@id": "_:nodes/one.jsml",
    headline: "Fourth post",
    description: "Some description",
    author: {
        "@id": "https://fid",
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
        "@id": "_:nodes/test.jsml"
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

// const js = new JsonLd(list);
// console.log(js.flatten());

/*
(async () => {
    const result = await hydrateJsonLd(blogPostIncomplete, async (url) => {
        console.log('ysoi: ' + url);
        return {test: 'hello world'};
    });
    console.log(result);
})();
*/

// console.log(toSchemaOrgJsonLd(blogPost, "BlogPosting", {'@base': 'http://chen4119.me'}));
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