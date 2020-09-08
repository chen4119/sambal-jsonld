import SchemaGenerator from "./SchemaGenerator";
import TypeHierarchyGenerator from "./TypeHierarchyGenerator";
import {SCHEMA_CONTEXT} from "./constants";


const generator = new TypeHierarchyGenerator();
generator.write("./src/schemaTypeArray.ts");

// const generator = new SchemaGenerator(`${SCHEMA_CONTEXT}/`);
// generator.writeSchema("./schemaorg-all-https.jsonld", "./src/schema.ts");


