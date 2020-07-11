import SchemaGenerator from "./SchemaGenerator";
import {SCHEMA_CONTEXT} from "./constants";

const generator = new SchemaGenerator(`${SCHEMA_CONTEXT}/`);
generator.writeSchema("./all-layers.jsonld", "./src/schema.ts");