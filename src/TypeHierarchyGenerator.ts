import fs from "fs";
import ts from "typescript";
import {schemaMap} from "./schema";
import {SAMBAL_NAME, SAMBAL_PARENT} from "./constants";
import {
    arrayToArrayLiteral,
    makeVariableStatement,
    makeStringLiteral,
    makeArrayLiteral,
    makeNew,
    makeIdentifier,
    makeTypeReferenceNode,
    makeArrayTypeNode,
    makeStringKeywordTypeNode,
    EXPORT_MODIFIER
} from "./ast";

type TypeNode = {
    name: string,
    children: string[]
};

class TypeHierarchyGenerator {
    private nodeMap: Map<string, TypeNode>;

    constructor() {
        const thingNode: TypeNode = {
            name: "Thing",
            children: []
        };
        this.nodeMap = new Map<string, TypeNode>();
        this.nodeMap.set(thingNode.name, thingNode);
    }

    write(output: string) {
        const types = [];
        this.getAllTypes();
        this.traverseInOrder("Thing", [], types);
        const stmt = this.makeTypeArray(types);
        this.writeJavascript([stmt], output);
    }

    writeChildTypes(output: string) {
        const typeChildrenMap = new Map<string, string[]>();
        this.getAllTypes();
        for (const nodeName of this.nodeMap.keys()) {
            const childrenSet = new Set<string>();
            this.getAllChildren(nodeName, childrenSet);
            if (childrenSet.size > 0) {
                typeChildrenMap.set(nodeName.toLowerCase(), [...childrenSet.values()].sort());
            }
        }
        const stmt = this.makeTypeChildrenMap(typeChildrenMap);
        this.writeJavascript([stmt], output);
    }

    private makeTypeChildrenMap(typeChildrenMap: Map<string, string[]>) {
        const mappings = [];
        for (const typeName of typeChildrenMap.keys()) {
            const children = typeChildrenMap.get(typeName);
            mappings.push(makeArrayLiteral([makeStringLiteral(typeName), arrayToArrayLiteral(children)]));
        }
        return makeVariableStatement(
            [EXPORT_MODIFIER],
            "schemaTypeChildren", 
            makeTypeReferenceNode("Map", [makeStringKeywordTypeNode(), makeArrayTypeNode(makeStringKeywordTypeNode())]),
            makeNew(makeIdentifier("Map"), [makeArrayLiteral(mappings)])
        );
    }

    private getAllChildren(nodeName: string, childrenSet: Set<string>) {
        const node = this.nodeMap.get(nodeName);
        for (const childName of node.children) {
            childrenSet.add(childName.toLowerCase());
            this.getAllChildren(childName, childrenSet);
        }
    }

    private recurseParent(childType): TypeNode {
        if (!childType || !childType[SAMBAL_NAME]) {
            return null;
        }
        const childName: string = childType[SAMBAL_NAME];
        let childNode = this.nodeMap.get(childName);
        if (!childNode) {
            childNode = {
                name: childName,
                children: []
            };
            this.nodeMap.set(childName, childNode);
        }
        for (const parent of childType[SAMBAL_PARENT]) {
            const parentType = schemaMap.get(parent.toLowerCase());
            const parentNode = this.recurseParent(parentType);
            if (parentNode && parentNode.children.indexOf(childName) < 0) {
                parentNode.children.push(childName);
            }
        }
        return childNode;
    }

    private getAllTypes() {
        for (const type of schemaMap.values()) {
            this.recurseParent(type);
        }
        for (const node of this.nodeMap.values()) {
            node.children.sort();
        }
    }

    private traverseInOrder(nodeName: string, paths: string[], types: string[][]) {
        const node = this.nodeMap.get(nodeName);
        for (const childName of node.children) {
            this.traverseInOrder(childName, [...paths, childName], types);
        }
        if (paths.length > 0) {
            types.push(paths);
        }
    }

    private makeTypeArray(types) {
        const statements = [];
        for (const typeArray of types) {
            statements.push(arrayToArrayLiteral(typeArray));
        }
        return makeVariableStatement(
            [EXPORT_MODIFIER],
            "schemaTypeArray",
            makeArrayTypeNode(makeArrayTypeNode(makeStringKeywordTypeNode())),
            makeArrayLiteral(statements)
        );
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

export default TypeHierarchyGenerator;