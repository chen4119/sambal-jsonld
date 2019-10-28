import {JSONLD_ID, JSONLD_CONTEXT, JSONLD_TYPE, JSONLD_GRAPH, JSONLD_VALUE} from "./Constants";
import {isObjectLiteral, isUrl} from "./Utils";
import {cloneDeep, isEqual} from "lodash";

export type Node = {
    links: Link[],
    data: any,
    isArray: boolean
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
    private blankNodeIndex = 1;
    private contextRef: string;
    private contextTermMap: Map<string, Term> = new Map<string, Term>();
    private graph: Map<string, Node> = new Map<string, Node>();
    constructor(private json: object, private context?: any) {
        this.parse(json, context);
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

    get graphMap(): Map<string, Node> {
        return this.graph;
    }

    flatten() {
        const flattenNodeMap: Map<string, object> = new Map<string, object>();
        this.flattenChildNodes(this.json, flattenNodeMap);
        return flattenNodeMap;
    }

    private flattenChildNodes(json: any, flattenNodeMap: Map<string, object>) {
        if (Array.isArray(json)) {
            return json.map(item => this.flattenChildNodes(item, flattenNodeMap));
        } else if (isObjectLiteral(json) && !this.isReferencingOtherNode(json)) {
            const jsonClone = cloneDeep(json);
            delete jsonClone[JSONLD_CONTEXT];
            for (const propKey of Object.keys(jsonClone)) {
                const value = this.flattenChildNodes(jsonClone[propKey], flattenNodeMap);
                const expandedValue = this.expand(value);
                jsonClone[propKey] = expandedValue;
            }
            let nodeId = this.getFlattenNodeId(jsonClone, flattenNodeMap);
            if (!nodeId) {
                nodeId = jsonClone[JSONLD_ID] ? jsonClone[JSONLD_ID] : `_:${flattenNodeMap.size + 1}`;
                jsonClone[JSONLD_ID] = nodeId;
                flattenNodeMap.set(nodeId, jsonClone);
            }
            return {[JSONLD_ID]: nodeId};
        }
        return json;
    }

    private getFlattenNodeId(json: any, flattenNodeMap: Map<string, object>) {
        if (flattenNodeMap.has(json[JSONLD_ID])) {
            return json[JSONLD_ID];
        }
        for (const node of flattenNodeMap.values()) {
            const isSame = this.isNodeSame(json, node);
            if (isSame) {
                return node[JSONLD_ID];
            }
        }
        return null;
    }

    private isNodeSame(node1: object, node2: object) {
        const nodeId1 = node1[JSONLD_ID];
        const nodeId2 = node2[JSONLD_ID];
        if (nodeId1 && nodeId2) {
            return nodeId1 === nodeId2;
        } else {
            // TODO: May need to expand before comparing.  Term prefix can change if there are multiple context.  Assuming context is same for all nodes right now
            const node1WithoutId = {
                ...node1,
                [JSONLD_ID]: undefined
            };
            const node2WithoutId = {
                ...node2,
                [JSONLD_ID]: undefined
            };
            return isEqual(node1WithoutId, node2WithoutId);
        }

    }

    private expand(json: any) {
        if (Array.isArray(json)) {
            return json.map(item => this.expand(item));
        } else if (isObjectLiteral(json)) {
            const expandedJson: object = {};
            for (const propKey of Object.keys(json)) {
                const expandedValue = this.expand(json[propKey]);
                if (propKey === JSONLD_ID) {
                    expandedJson[JSONLD_ID] = expandedValue;
                } else if (propKey === JSONLD_TYPE) {
                    expandedJson[JSONLD_TYPE] = this.getAbsoluteIRI(expandedValue);
                } else if (propKey !== JSONLD_CONTEXT) {
                    const absoluteIRI = this.getAbsoluteIRI(propKey);
                    expandedJson[absoluteIRI] = [{
                        [JSONLD_VALUE]: expandedValue
                    }];
                }
            }
            return expandedJson;
        }
        return json;
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

    private parse(json: object, context?: any) {
        if (json[JSONLD_CONTEXT]) {
            this.parseContext(json[JSONLD_CONTEXT]);
        } else if (context) {
            this.parseContext(context);
        }
        if (json[JSONLD_GRAPH]) {
            this.parseGraph(json[JSONLD_GRAPH]);
        } else {
            // since no graph, pass empty graph map
            this.parseGraphNode(new Map<string, any>(), json);
            
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
        } else if (isObjectLiteral(context)) {
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
        // let index = 1;
        for (const data of graph) {
            /*
            let nodeId = data[JSONLD_ID];
            if (!nodeId) {
                // node might not have ID, assign a blank ID
                nodeId = `_:${index}`;
                index++;
                data[JSONLD_ID] = nodeId;
            }*/
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
            } else if (isObjectLiteral(value)) {
                this.recursivelyVisitAllNodes(graphMap, value);
            }
        }
    }

    private parseGraphNode(graphMap: Map<string, any>, data: any): Node {
        const nodeId = data[JSONLD_ID] ? data[JSONLD_ID] : this.getNextBlankNodeId();
        const isReferencingOtherNode = this.isReferencingOtherNode(data);
        if (this.graph.has(nodeId)) {
            return this.graph.get(nodeId);
        } else if (isReferencingOtherNode && graphMap.has(nodeId)) {
            return this.parseGraphNode(graphMap, graphMap.get(nodeId));
        }

        const node: Node = {links: [], data: {}, isArray: false};
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
        if (isObjectLiteral(value)) {
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

    private isReferencingOtherNode(data: object) {
        return Object.keys(data).length === 1 && data[JSONLD_ID];
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
                return this.makeAbsoluteIRI(context.id, suffix);
            }
        } else if (this.contextRef) {
            return this.makeAbsoluteIRI(this.contextRef, propKey);
        }
        return propKey;
    }

    private makeAbsoluteIRI(context: string, propKey: string) {
        if (context.endsWith("#") || context.endsWith("/")) {
            return `${context}${propKey}`;
        }
        return `${context}/${propKey}`;
    }
}

export default JsonLd;