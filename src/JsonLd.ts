import {JSONLD_ID, JSONLD_CONTEXT, JSONLD_TYPE, JSONLD_GRAPH, SAMBAL_CONTEXT} from "./Constants";

export type Node = {
    links: Link[],
    data: any
};

export type Link = {
    edge: string,
    node: Node
}


class JsonLd {
    private termIRIMap: Map<string, string> = new Map<string, string>();
    private graph: Map<string, Node> = new Map<string, Node>();
    constructor(private json: any) {
        this.parse(json);
    }

    toCompactJsonLd(context?: any) {

    }

    get graphMap(): Map<string, Node> {
        return this.graph;
    }

    private parse(json: any) {
        if (json[JSONLD_CONTEXT]) {
            this.parseContext(json[JSONLD_CONTEXT]);
        }
        if (json[JSONLD_GRAPH]) {
            this.parseGraph(json[JSONLD_GRAPH]);
        }
        /*
        for (const key of this.graph.keys()) {
            const node = this.graph.get(key);
            console.log(node);
        }*/
    }

    private parseContext(context: any) {
        for (const key of Object.keys(context)) {
            const contextValue = context[key];
            if (typeof(contextValue) === "string") {
                this.termIRIMap.set(key, contextValue);
            } else {
                if (contextValue[JSONLD_ID]) {
                    this.termIRIMap.set(key, contextValue[JSONLD_ID]);
                }
            }
        }
    }

    private parseGraph(graph: any[]) {
        const graphMap: Map<string, any> = new Map<string, any>();
        for (const data of graph) {
            this.recursivelyVisitAllNodes(graphMap, data);
        }
        let index = 1;
        for (const data of graph) {
            let nodeId = data[JSONLD_ID];
            if (!nodeId) {
                // node might not have ID, assign a unique ID
                nodeId = `${SAMBAL_CONTEXT}/${index}`;
                index++;
                data[JSONLD_ID] = nodeId;
            }
            // console.log(data);
            this.parseGraphNode(graphMap, data);
        }
    }

    private recursivelyVisitAllNodes(graphMap: Map<string, any>, data: any) {
        if (this.isReferencingOtherNode(data)) {
            return;
        }
        if (data[JSONLD_ID]) {
            graphMap.set(data[JSONLD_ID], data);
        }
        for (const key of Object.keys(data)) {
            const value = data[key];
            if (Array.isArray(value)) {
                value.forEach(child => this.recursivelyVisitAllNodes(graphMap, child));
            } else if (typeof(value) === "object") {
                this.recursivelyVisitAllNodes(graphMap, value);
            }
        }
    }

    private parseGraphNode(graphMap: Map<string, any>, data: any): Node {
        const nodeId = data[JSONLD_ID];
        if (this.graph.has(nodeId)) {
            return this.graph.get(nodeId);
        } else if (this.isReferencingOtherNode(data) && graphMap.has(nodeId)) {
            return this.parseGraphNode(graphMap, graphMap.get(nodeId));
        }

        const node: Node = {links: [], data: {}};
        this.graph.set(nodeId, node);
        for (const key of Object.keys(data)) {
            if (this.isLink(key)) {
                this.addNodeLink(graphMap, node, key, data[key]);
            } else {
                node.data[key] = data[key];
            }
        }
        return node;
    }

    private addNodeLink(graphMap: Map<string, any>, node: Node, key: string, value: any) {
        if (Array.isArray(value)) {
            value.forEach(child => this.addNodeLink(graphMap, node, key, child));
            return;
        }
        let targetNode;
        if (typeof(value) === "object" && value[JSONLD_ID]) {
            targetNode = this.parseGraphNode(graphMap, value);
        } else {
            targetNode = {links: [], data: value};
        }
        node.links.push({
            edge: this.getAbsoluateIRI(key),
            node: targetNode
        });
    }

    private isReferencingOtherNode(data: any) {
        return Object.keys(data).length === 1 && data[JSONLD_ID];
    }

    private isLink(propKey: string) {
        if (propKey.startsWith("http://") || propKey.startsWith("https://")) {
            return true;
        } else if(propKey.indexOf(":") >= 0) {
            const splitted = propKey.split(":");
            const prefix = splitted[0];
            return this.termIRIMap.has(prefix);
        }
        return false;
    }

    private getAbsoluateIRI(propKey: string) {
        if (propKey.startsWith("http://") || propKey.startsWith("https://")) {
            return propKey;
        }
        const splitted = propKey.split(":");
        const prefix = splitted[0];
        const suffix = splitted[1];
        const context = this.termIRIMap.get(prefix);
        if (context.endsWith("#") || context.endsWith("/")) {
            return `${context}${suffix}`;
        }
        return `${context}/${suffix}`;
    }
}

export default JsonLd;