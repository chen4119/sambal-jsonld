import fs from "fs";
import JsonLd from "./JsonLd";
import {JSONLD_TYPE} from "./Constants";
import SchemaGenerator from "./SchemaGenerator";
import {toSchemOrgJsonLd, hydrateJsonLd, bundleSchemaOrgJsonLd} from "./Utils";

// const generator = new SchemaGenerator("./all-layers.jsonld", "./src/Schema.ts");
// generator.run();

const person = {
    "name": "Jane Doe",
    "givenName": "Wan Chun",
    "telephone": "(425) 123-4567",
    "url": "http://www.janedoe.com"
};

const blogPost = {
    headline: "Fourth post",
    description: "Some description",
    author: {
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

/*
(async () => {
    const result = await hydrateJsonLd(blogPostIncomplete, async (url) => {
        console.log('ysoi: ' + url);
        return {test: 'hello world'};
    });
    console.log(result);
})();
*/

console.log(bundleSchemaOrgJsonLd({
    mystuff: [toSchemOrgJsonLd(blogPost, "BlogPosting"), toSchemOrgJsonLd(blogPost, "BlogPosting")]
}));
// console.log(toSchemOrgJsonLd(blogPost, "BlogPosting"));

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