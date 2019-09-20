import fs from "fs";
import JsonLd from "./JsonLd";
import {JSONLD_TYPE} from "./Constants";
import SchemaGenerator from "./SchemaGenerator";
import {toSchemOrgJsonLd} from "./Utils";

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

console.log(toSchemOrgJsonLd(blogPost, "BlogPosting"));

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