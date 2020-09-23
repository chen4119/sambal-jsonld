import fs from "fs";
import ts from "typescript";
import {makeVariableStatement, EXPORT_MODIFIER, objectToObjectLiteral, makeArrayLiteral, makeStringLiteral, makeIdentifier, makeNew} from "./ast";
import JsonLd, {Node} from "./JsonLd";
import {JSONLD_ID, JSONLD_TYPE, JSONLD_VALUE, SCHEMA_CONTEXT, SAMBAL_NAME, SAMBAL_PARENT, SAMBAL_VALUES, SCHEMA_ENUMERATION, SCHEMA_PRIMITIVE_SET} from "./constants";
import {makeRelativeIRI} from "./utils";

const SUBCLASS_EDGE = "http://www.w3.org/2000/01/rdf-schema#subClassOf";
const LABEL_EDGE = "http://www.w3.org/2000/01/rdf-schema#label";
const CLASS = "rdfs:Class";
const PROPERTY = "rdf:Property";
const PENDING = "https://pending.schema.org";
const ATTIC = "https://attic.schema.org";
const META = "https://meta.schema.org";

const SUPERSEDEDBY_EDGE = `${SCHEMA_CONTEXT}/supersededBy`;
const DOMAIN_INCLUDES_EDGE = `${SCHEMA_CONTEXT}/domainIncludes`;
const RANGE_INCLUDES_EDGE = `${SCHEMA_CONTEXT}/rangeIncludes`;
const PART_OF_EDGE = `${SCHEMA_CONTEXT}/isPartOf`;



type SchemaProperty = {
    name: string,
    types: string[]
};

type SchemaClass = {
    id: string,
    name: string,
    parent: string[],
    properties: SchemaProperty[]
};

type SchemaEnumeration = {
    id: string,
    name: string,
    parent: string[],
    values: string[]
}

class SchemaGenerator {
    private classPropertiesMap: Map<string, SchemaClass>;
    private enumValuesMap: Map<string, SchemaEnumeration>;
    constructor(private base?: string) {
        this.classPropertiesMap = new Map<string, SchemaClass>();
        this.enumValuesMap = new Map<string, SchemaEnumeration>();
    }

    writeSchema(schemaFile: string, output: string) {
        const content = fs.readFileSync(schemaFile, "utf-8");
        const schemaJson = JSON.parse(content);
        
        this.parseSchema(schemaJson);
        const statements = [];
        this.makeSchemaMap(statements);
        this.writeJavascript(statements, output);
    }

    parseSchema(schemaJson: any) {
        const jsonLd = new JsonLd(schemaJson);

        this.iterateAllClasses(jsonLd.graphMap);
        this.iterateAllProperties(jsonLd.graphMap);
        this.iterateEnumValues(jsonLd.graphMap);
    }

    get classProperties() {
        return this.classPropertiesMap;
    }

    get enums() {
        return this.enumValuesMap;
    }

    private makeSchemaMap(statements) {
        const mappings = [];
        for (const classId of this.classPropertiesMap.keys()) {
            const clazz: SchemaClass = this.classPropertiesMap.get(classId); 
            const obj = {};
            obj[SAMBAL_NAME] = clazz.name;
            if (clazz.parent) {
                obj[SAMBAL_PARENT] = clazz.parent.map(t => makeRelativeIRI(this.base, t))
            }
            clazz.properties.sort((a, b) => a.name.localeCompare(b.name));
            for (const prop of clazz.properties) {
                obj[prop.name] = prop.types.map(t => makeRelativeIRI(this.base, t));
            }
            mappings.push(makeArrayLiteral([makeStringLiteral(makeRelativeIRI(this.base, classId).toLowerCase()), objectToObjectLiteral(obj)]));
        }
        for (const classId of this.enumValuesMap.keys()) {
            const enumeration: SchemaEnumeration = this.enumValuesMap.get(classId);
            const obj = {
                [SAMBAL_VALUES]: enumeration.values
            };
            mappings.push(makeArrayLiteral([makeStringLiteral(makeRelativeIRI(this.base, classId).toLowerCase()), objectToObjectLiteral(obj)]));
        }
        const stmt = makeVariableStatement([EXPORT_MODIFIER], "schemaMap", makeNew(makeIdentifier("Map"), [makeArrayLiteral(mappings)]));
        statements.push(stmt);
    }

    private iterateAllClasses(graph: Map<string, Node>) {
        for (const node of graph.values()) {
            if (node.data[JSONLD_TYPE] === CLASS && !this.ignoreNode(node)) {
                const parents = this.getParents(node);
                const isEnumeration = this.isEnumeration(parents, graph);
                if (isEnumeration) {
                    this.addEnumClass(node, parents);
                } else {
                    this.addClass(node, parents);
                }
            }
        }
    }

    private isEnumeration(parents: string[], graph: Map<string, Node>) {
        for (const parent of parents) {
            if (parent === SCHEMA_ENUMERATION) {
                return true;
            }
            if (!graph.has(parent)) {
                console.error(`Cannot find id: ${parent}`);
                return false;
            }
            const parentNode = graph.get(parent);
            const isEnum = this.isEnumeration(this.getParents(parentNode), graph);
            if (isEnum) {
                return true;
            }
        }
        return false;
    }

    private iterateEnumValues(graphMap: Map<string, Node>) {
        for (const node of graphMap.values()) {
            const type = node.data[JSONLD_TYPE];
            if (typeof(type) === "string" && type !== PROPERTY && type !== CLASS && !this.ignoreNode(node)) {
                if (this.enumValuesMap.has(type)) {
                    const enumClass = this.enumValuesMap.get(type);
                    enumClass.values.push(this.getName(node));
                } else {
                    console.error(`Enum class not found: ${type}`);
                }
            }
        }
    }

    private iterateAllProperties(graphMap: Map<string, Node>) {
        for (const node of graphMap.values()) {
            if (node.data[JSONLD_TYPE] === PROPERTY && !this.ignoreNode(node)) {
                this.addPropertyToDomain(node);
            }
        }
    }

    private addPropertyToDomain(propertyNode: Node) {
        const propTypes = this.getPropertyTypes(propertyNode);
        const propName = this.getName(propertyNode);
        for (const link of propertyNode.links) {
            if (link.edge === DOMAIN_INCLUDES_EDGE) {
                const clazz = this.getClass(link.node);
                if (clazz) {
                    clazz.properties.push({
                        name: propName,
                        types: propTypes
                    });
                }
            }
        }
    }

    private addClass(node: Node, parents: string[]) {
        const id = node.data[JSONLD_ID];
        const name = this.getName(node);
        const clazz = {
            id: id,
            name: name,
            parent: parents,
            properties: []
        };
        this.classPropertiesMap.set(id, clazz);
    }

    private addEnumClass(node: Node, parents: string[]) {
        const id = node.data[JSONLD_ID];
        const name = this.getName(node);
        const enumClass = {
            id: id,
            name: name,
            parent: parents,
            values: []
        };
        this.enumValuesMap.set(id, enumClass);
    }

    private getClass(node: Node) {
        const id = node.data[JSONLD_ID];
        if (this.classPropertiesMap.has(id)) {
            return this.classPropertiesMap.get(id);
        }
        // some can be both enum and non-enum class
        if (this.enumValuesMap.has(id)) {
            const enumClass = this.enumValuesMap.get(id);
            const clazz = {
                id: id,
                name: enumClass.name,
                parent: enumClass.parent,
                properties: []
            };
            this.classPropertiesMap.set(id, clazz);
            return clazz;
        }
        console.error(`Class not found: ${id}`);
        return null;
    }

    private getName(node: Node) {
        const labelLink = node.links.find(l => l.edge === LABEL_EDGE);
        if (labelLink) {
            if (typeof(labelLink.node.data) === "string") {
                return labelLink.node.data;
            } else if (typeof(labelLink.node.data) === "object") {
                return labelLink.node.data[JSONLD_VALUE];
            }
        }
        console.error(`No name found for node: ${node.data[JSONLD_ID]}`);
        return '';
    }

    private getPropertyTypes(propertyNode: Node) {
        const types = [];
        for (const link of propertyNode.links) {
            if (link.edge === RANGE_INCLUDES_EDGE) {
                const typeId = link.node.data[JSONLD_ID];
                const isValid = SCHEMA_PRIMITIVE_SET.has(typeId) || this.classPropertiesMap.has(typeId) || this.enumValuesMap.has(typeId);
                if (isValid) {
                    types.push(link.node.data[JSONLD_ID]);
                }
            }
        }
        return types;
    }

    private getParents(node: Node): string[] {
        const parents = [];
        for (const link of node.links) {
            if (link.edge === SUBCLASS_EDGE) {
                parents.push(link.node.data[JSONLD_ID]);
            }
        }
        return parents;
    }

    private ignoreNode(node: Node) {
        return this.isSuperseded(node) || this.isSchemaPendingOrAtticOrMeta(node);
    }

    private isSchemaPendingOrAtticOrMeta(node: Node) {
        for (const link of node.links) {
            if (link.edge === PART_OF_EDGE &&
                (link.node.data[JSONLD_ID] === PENDING ||
                link.node.data[JSONLD_ID] === ATTIC ||
                link.node.data[JSONLD_ID] === META)) {
                return true;
            }
        }
        return false;
    }

    private isSuperseded(node: Node) {
        return node.links.findIndex(l => l.edge === SUPERSEDEDBY_EDGE) >= 0;
    }

    private writeJavascript(statements, output) {
        const tsPrinter = ts.createPrinter({
            newLine: ts.NewLineKind.LineFeed
        });
        const sourceFile = ts.createSourceFile(
            output,
            "",
            ts.ScriptTarget.Latest,
            false,
            ts.ScriptKind.TS
        );
        const tsSource = tsPrinter.printList(
            ts.ListFormat.MultiLine,
            ts.createNodeArray(statements),
            sourceFile
        );

        fs.writeFileSync(output, tsSource, "utf-8");
    }
}

export default SchemaGenerator;