import {JSONLD_ID, JSONLD_CONTEXT, JSONLD_TYPE, JSONLD_GRAPH, SAMBAL_CONTEXT} from "./Constants";

export type Node = {
    links: Link[],
    data: any
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
    private vocab: string;
    private contextRef: string;
    private contextTermMap: Map<string, Term> = new Map<string, Term>();
    private graph: Map<string, Node> = new Map<string, Node>();
    constructor(private json: object) {
        this.parse(json);
    }

    async resolveJson(fetcher: (url) => Promise<any>) {
        if (this.isReferencingOtherNode(this.json)) {
            const link = this.json[JSONLD_ID];
            return await this.fetchNode(link, fetcher);
        }
        for (const propName of this.contextTermMap.keys()) {
            const term: Term = this.contextTermMap.get(propName);
            if (term.type === JSONLD_ID) {
                const link = this.json[propName];
                const propValue = await this.fetchNode(link, fetcher);
                this.json[propName] = propValue;
            }
        }
        return this.json;
    }

    getTermId(propKey: string): string {
        if (this.contextTermMap.has(propKey)) {
            return this.contextTermMap.get(propKey).id;
        }
        return propKey;
    }

    getTermValue(termId: string) {
        return this.json[termId];
    }

    get graphMap(): Map<string, Node> {
        return this.graph;
    }

    private async fetchNode(link: string, fetcher: (url) => Promise<any>) {
        if (this.graph.has(link)) {
            return this.graph.get(link);
        }
        let url = link;
        if (this.isBlankNodeIRI(link)) {
            url = link.substring(2);
        }
        return await fetcher(url);
    }

    private isBlankNodeIRI(link: string) {
        return link.startsWith("_:");
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
        if (typeof(context) === "string") {
            this.contextRef = context;
        } else if (Array.isArray(context)) {
            context.forEach(c => this.parseContext(c));
        } else if (typeof(context) === "object") {
            this.parseContextObject(context);
        }
    }

    private parseContextObject(context: object) {
        for (const key of Object.keys(context)) {
            const contextValue = context[key];
            if (typeof(contextValue) === "string") {
                this.contextTermMap.set(key, {id: contextValue});
            } else {
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

    private isReferencingOtherNode(data: object) {
        return Object.keys(data).length === 1 && data[JSONLD_ID];
    }

    private isLink(propKey: string) {
        if (propKey.startsWith("http://") || propKey.startsWith("https://")) {
            return true;
        } else if(propKey.indexOf(":") >= 0) {
            const splitted = propKey.split(":");
            const prefix = splitted[0];
            return this.contextTermMap.has(prefix);
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
        const context = this.contextTermMap.get(prefix);
        if (context.id) {
            if (context.id.endsWith("#") || context.id.endsWith("/")) {
                return `${context.id}${suffix}`;
            }
            return `${context.id}/${suffix}`;
        }
    }
}

export default JsonLd;