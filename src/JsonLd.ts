import {
    JSONLD_ID,
    JSONLD_CONTEXT,
    JSONLD_TYPE,
    JSONLD_GRAPH,
    JSONLD_BASE
} from "./constants";
import {
    isObjectLiteral,
    isUrl,
    makeAbsoluteIRI,
    isJsonLdRef
} from "./utils";

export type Node = {
    links: Link[],
    data: any,
    isArray: boolean,
    id: string
};

export type Link = {
    edge: string,
    node: Node
}

export type Term = {
    id?: string,
    type?: string
}

class JsonLd {
    // private vocab: string;
    private blankNodeIndex;
    private contextRef: string;
    private base: string;
    private contextTermMap: Map<string, Term>;
    private graph: Map<string, Node>;
    constructor(private json: unknown, private context?: any) {
        this.blankNodeIndex = 1;
        this.graph = new Map<string, Node>();
        this.contextTermMap = new Map<string, Node>();
        this.parse(json, context);
    }

    get baseIRI(): string {
        return this.base;
    }

    get graphMap(): Map<string, Node> {
        return this.graph;
    }

    flatten() {
        const flattenNodeMap: Map<string, unknown> = new Map<string, unknown>();
        for (const nodeId of this.graph.keys()) {
            const nodeObj = this.getNode(nodeId, false);
            flattenNodeMap.set(nodeId, nodeObj);
        }
        return flattenNodeMap;
    }

    getGraphRootNodes() {
        const childNodeSet = new Set();
        for (const nodeId of this.graph.keys()) {
            const node = this.graph.get(nodeId);
            for (const link of node.links) {
                if (link.node.id) {
                    childNodeSet.add(link.node.id);
                }
            }
        }
        const rootNodes = [];
        for (const nodeId of this.graph.keys()) {
            if (!childNodeSet.has(nodeId)) {
                rootNodes.push(this.getNode(nodeId, true));
            }
        }
        if (rootNodes.length === 1) {
            return rootNodes[0];
        }
        return rootNodes;
    }

    getNode(nodeId: string, recurse: boolean, expand: boolean = false) {
        if (!this.graph.has(nodeId)) {
            return null;
        }
        const node: Node = this.graph.get(nodeId);
        const obj = {};
        for (const link of node.links) {
            const propName = expand ? link.edge : this.getCondensedPropName(link.edge);
            this.setNodeObjectProp(obj, propName, link.node, recurse, expand);
        }
        // set generated id first.  If an actual id is specified, will override from node.data
        if (node.id) {
            obj[JSONLD_ID] = node.id;
        }
        if (node.data) {
            for (const propName of Object.keys(node.data)) {
                obj[propName] = node.data[propName];
            }
        }
        return obj;
    }

    private setNodeObjectProp(obj: unknown, propName: string, node: Node, recurse: boolean, expand: boolean) {
        let propValue = node.data;
        if (node.id) {
            if (recurse) {
                const childNode = this.getNode(node.id, recurse, expand);
                propValue = childNode ? childNode : {[JSONLD_ID]: node.id};
            } else {
                propValue = {[JSONLD_ID]: node.id};
            }
        }
        if (node.isArray) {
            obj[propName] = Array.isArray(obj[propName]) ? [...obj[propName], propValue] : [propValue];
        } else if (propValue !== undefined) {
            obj[propName] = propValue;
        }
    }

    private getCondensedPropName(absoluteIRI: string) {
        if (isUrl(absoluteIRI)) {
            for (const termKey of this.contextTermMap.keys()) {
                const term = this.contextTermMap.get(termKey);
                if (absoluteIRI === term.id) {
                    return termKey;
                } else if (absoluteIRI.startsWith(term.id)) {
                    return `${termKey}:${this.getIRISuffix(term.id, absoluteIRI)}`;
                }
            }
            if (this.contextRef && absoluteIRI.startsWith(this.contextRef)) {
                return this.getIRISuffix(this.contextRef, absoluteIRI);
            }
        }
        return absoluteIRI;
    }

    private getIRISuffix(prefix: string, absoluteIRI: string) {
        const suffix = absoluteIRI.substring(prefix.length);
        if (suffix.startsWith("/")) {
            return suffix.substring(1);
        }
        return suffix;
    }

    private parse(json: unknown, context?: any) {
        if (json[JSONLD_CONTEXT]) {
            this.parseContext(json[JSONLD_CONTEXT]);
        } else if (context) {
            this.parseContext(context);
        }
        if (json[JSONLD_GRAPH]) {
            this.parseGraph(json[JSONLD_GRAPH]);
        } else {
            // since no graph, use empty graph map
            const emptyGraphMap = new Map<string, any>();
            if (Array.isArray(json)) {
                for (const node of json) {
                    this.parseGraphNode(emptyGraphMap, node);
                }
            } else {
                this.parseGraphNode(emptyGraphMap, json);
            }
        }
    }

    private parseContext(context: any) {
        if (typeof(context) === "string") {
            this.contextRef = context;
        } else if (Array.isArray(context)) {
            context.forEach(c => this.parseContext(c));
        } else if (isObjectLiteral(context)) {
            this.parseContextObject(context);
        }
    }

    private parseContextObject(context: unknown) {
        for (const key of Object.keys(context)) {
            const contextValue = context[key];
            if (key === JSONLD_BASE) {
                this.base = contextValue;
            } else if (typeof(contextValue) === "string") {
                this.contextTermMap.set(key, {id: contextValue});
            } else { // context value is an object literal
                if (contextValue[JSONLD_ID]) {
                    this.contextTermMap.set(key, {
                        id: contextValue[JSONLD_ID],
                        type: contextValue[JSONLD_TYPE]
                    });
                }
            }
        }
    }

    private parseGraph(graph: any[]) {
        const graphMap: Map<string, any> = new Map<string, any>();
        for (const data of graph) {
            this.recursivelyVisitAllNodes(graphMap, data);
        }
        for (const data of graph) {
            this.parseGraphNode(graphMap, data);
        }
    }

    private recursivelyVisitAllNodes(graphMap: Map<string, any>, data: any) {
        if (!data) {
            return null;
        }
        if (isJsonLdRef(data)) {
            return;
        }
        if (data[JSONLD_ID]) {
            graphMap.set(data[JSONLD_ID], data);
        }
        for (const key of Object.keys(data)) {
            const value = data[key];
            if (Array.isArray(value)) {
                value.forEach(child => this.recursivelyVisitAllNodes(graphMap, child));
            } else if (isObjectLiteral(value)) {
                this.recursivelyVisitAllNodes(graphMap, value);
            }
        }
    }

    private parseGraphNode(graphMap: Map<string, any>, data: any): Node {
        const nodeId = data[JSONLD_ID] ? data[JSONLD_ID] : this.getNextBlankNodeId();
        const isReferencingOtherNode = isJsonLdRef(data);
        if (this.graph.has(nodeId)) {
            return this.graph.get(nodeId);
        } else if (isReferencingOtherNode && graphMap.has(nodeId)) {
            return this.parseGraphNode(graphMap, graphMap.get(nodeId));
        }

        const node: Node = {links: [], data: {}, isArray: false, id: nodeId};
        if (!isReferencingOtherNode) {
            this.graph.set(nodeId, node);
        }
        for (const propName of Object.keys(data)) {
            const absoluteIRI = this.getAbsoluteIRI(propName);
            if (isUrl(absoluteIRI)) {
                this.addNodeLink(graphMap, node, absoluteIRI, data[propName], false);
            } else {
                node.data[propName] = data[propName];
            }
        }
        return node;
    }

    private addNodeLink(graphMap: Map<string, any>, node: Node, absoluteIRI: string, value: any, isArray: boolean) {
        if (Array.isArray(value)) {
            value.forEach(child => this.addNodeLink(graphMap, node, absoluteIRI, child, true));
            return;
        }
        let targetNode;
        if (isObjectLiteral(value) && value[JSONLD_ID]) {
            targetNode = this.parseGraphNode(graphMap, value);
            targetNode.isArray = isArray;
        } else {
            targetNode = {links: [], data: value, isArray: isArray};
        }
        node.links.push({
            edge: absoluteIRI,
            node: targetNode
        });
    }

    private getNextBlankNodeId() {
        return `_:${this.blankNodeIndex++}`;
    }

    private getAbsoluteIRI(propKey: string) {
        // json-ld keyword
        if (propKey.startsWith("@")) {
            return propKey;
        }

        if (this.contextTermMap.has(propKey)) {
            return this.contextTermMap.get(propKey).id;
        } else if (isUrl(propKey)) {
            return propKey; // already absolute iri
        } else if (propKey.indexOf(":") >= 0) {
            const splitted = propKey.split(":");
            const prefix = splitted[0];
            const suffix = splitted[1];
            const context = this.contextTermMap.get(prefix);
            if (context.id) {
                return makeAbsoluteIRI(context.id, suffix);
            }
        } else if (this.contextRef) {
            return makeAbsoluteIRI(this.contextRef, propKey);
        }
        return propKey;
    }
}

export default JsonLd;