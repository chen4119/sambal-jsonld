import SchemaGenerator from "../src/SchemaGenerator";
import {SCHEMA_CONTEXT, JSONLD_ID} from "../src/constants";

describe('SchemaGenerator', () => {
    const graph = {
        "@context": {
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
            "xsd": "http://www.w3.org/2001/XMLSchema#"
        },
        "@graph": [
            {
                "@id": "http://schema.org/prop1",
                "@type": "rdf:Property",
                "http://schema.org/domainIncludes": {
                    "@id": "http://schema.org/entity1"
                },
                "http://schema.org/isPartOf": {
                    "@id": "http://health-lifesci.schema.org"
                },
                "http://schema.org/rangeIncludes": [{
                    "@id": "http://schema.org/Text"
                }, {
                    "@id": "http://schema.org/Schedule"
                }],
                "rdfs:comment": "Comment about property 1",
                "rdfs:label": "Property 1"
            },
            {
                "@id": "http://schema.org/entity1",
                "@type": "rdfs:Class",
                "rdfs:subClassOf": {
                    "@id": "http://schema.org/root"
                },
                "rdfs:comment": "Comment about entity 1",
                "rdfs:label": "Entity 1"
            },
            {
                "@id": "http://schema.org/root",
                "@type": "rdfs:Class",
                "rdfs:comment": "Comment about root",
                "rdfs:label": "Root entity"
            },
            {
                "@id": "http://schema.org/Schedule",
                "@type": "rdfs:Class",
                "http://schema.org/category": "issue-1457",
                "http://schema.org/isPartOf": {
                    "@id": "http://pending.schema.org"
                },
                "http://schema.org/source": {
                    "@id": "https://github.com/schemaorg/schemaorg/issues/1457"
                },
                "rdfs:comment": "A schedule defines a repeating time period used to describe a regularly occurring <a class=\"localLink\" href=\"http://schema.org/Event\">Event</a>. At a minimum a schedule will specify <a class=\"localLink\" href=\"http://schema.org/repeatFrequency\">repeatFrequency</a> which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely.\n      This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also\n      have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.",
                "rdfs:label": "Schedule"
            }
        ]
    };

    it('has right classes', () => {
        const generator = new SchemaGenerator();
        generator.parseSchema(graph);
        expect(generator.classPropertiesMap.size).toBe(2);
        expect(generator.classPropertiesMap.has("http://schema.org/entity1")).toBeTruthy();
        expect(generator.classPropertiesMap.has("http://schema.org/root")).toBeTruthy();
        expect(generator.classPropertiesMap.has("http://schema.org/Schedule")).toBeFalsy();
    });

    it('entity1 has prop1 property', () => {
        const generator = new SchemaGenerator();
        generator.parseSchema(graph);
        const entity1 = generator.classPropertiesMap.get("http://schema.org/entity1");
        expect(entity1.properties.length).toBe(1);
        expect(entity1.properties[0].name).toBe("Property 1");
    });

    

});