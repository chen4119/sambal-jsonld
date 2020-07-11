import SchemaGenerator from "./SchemaGenerator";


const generator = new SchemaGenerator();
generator.writeSchema("./all-layers.jsonld", "./src/schema.ts");