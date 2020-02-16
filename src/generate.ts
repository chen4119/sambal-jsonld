import SchemaGenerator from "./SchemaGenerator";


const generator = new SchemaGenerator("./all-layers.jsonld", "./src/schema.ts");
generator.run();