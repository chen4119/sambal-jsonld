import fs from "fs";
import ts from "typescript";
import {schemaMap} from "./schema";
import {SAMBAL_ID, SAMBAL_NAME, SAMBAL_PARENT} from "./constants";
import {arrayToArrayLiteral, makeVariableStatement, makeArrayLiteral, EXPORT_MODIFIER} from "./ast";

type TypeNode = {
    id: string,
    name: string,
    children: string[]
};

class TypeHierarchyGenerator {
    private nodeMap: Map<string, TypeNode>;

    constructor() {
        const thingNode: TypeNode = {
            id: "Thing",
            name: "Thing",
            children: []
        };
        this.nodeMap = new Map<string, TypeNode>();
        this.nodeMap.set(thingNode.id, thingNode);
    }

    write(output: string) {
        const types = [];
        this.getAllTypes();
        this.traverseInOrder("Thing", ["Thing"], types);
        const stmt = this.makeTypeArray(types);
        this.writeJavascript([stmt], output);
    }

    private recurseParent(childType): TypeNode {
        if (!childType || !childType[SAMBAL_ID]) {
            return null;
        }
        const childId: string = childType[SAMBAL_ID];
        let childNode = this.nodeMap.get(childId);
        if (!childNode) {
            childNode = {
                id: childId,
                name: childType[SAMBAL_NAME],
                children: []
            };
            this.nodeMap.set(childId, childNode);
        }
        for (const parent of childType[SAMBAL_PARENT]) {
            const parentType = schemaMap.get(parent.toLowerCase());
            const parentNode = this.recurseParent(parentType);
            if (parentNode && parentNode.children.indexOf(childId) < 0) {
                parentNode.children.push(childId);
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

    private traverseInOrder(nodeId: string, paths: string[], types: string[][]) {
        const node = this.nodeMap.get(nodeId);
        types.push(paths);
        for (const childId of node.children) {
            this.traverseInOrder(childId, [...paths, childId], types);
        }
    }

    private makeTypeArray(types) {
        const statements = [];
        for (const typeArray of types) {
            statements.push(arrayToArrayLiteral(typeArray));
        }
        return makeVariableStatement([EXPORT_MODIFIER], "schemaTypeArray", makeArrayLiteral(statements));
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