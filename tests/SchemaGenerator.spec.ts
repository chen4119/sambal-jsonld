import SchemaGenerator from "../src/SchemaGenerator";

describe('SchemaGenerator', () => {
    const graph = {
        "@context": {
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
            "xsd": "http://www.w3.org/2001/XMLSchema#"
        },
        "@graph": [
            {
                "@id": "https://schema.org/prop1",
                "@type": "rdf:Property",
                "https://schema.org/domainIncludes": {
                    "@id": "https://schema.org/entity1"
                },
                "https://schema.org/isPartOf": {
                    "@id": "https://health-lifesci.schema.org"
                },
                "https://schema.org/rangeIncludes": [{
                    "@id": "https://schema.org/Text"
                }, {
                    "@id": "https://schema.org/Schedule"
                }],
                "rdfs:comment": "Comment about property 1",
                "rdfs:label": "Property 1"
            },
            {
                "@id": "https://schema.org/entity1",
                "@type": "rdfs:Class",
                "rdfs:subClassOf": {
                    "@id": "https://schema.org/root"
                },
                "rdfs:comment": "Comment about entity 1",
                "rdfs:label": "Entity 1"
            },
            {
                "@id": "https://schema.org/root",
                "@type": "rdfs:Class",
                "rdfs:comment": "Comment about root",
                "rdfs:label": "Root entity"
            },
            {
                "@id": "https://schema.org/Schedule",
                "@type": "rdfs:Class",
                "https://schema.org/category": "issue-1457",
                "https://schema.org/isPartOf": {
                    "@id": "https://pending.schema.org"
                },
                "https://schema.org/source": {
                    "@id": "https://github.com/schemaorg/schemaorg/issues/1457"
                },
                "rdfs:comment": "A schedule defines a repeating time period used to describe a regularly occurring <a class=\"localLink\" href=\"https://schema.org/Event\">Event</a>. At a minimum a schedule will specify <a class=\"localLink\" href=\"http://schema.org/repeatFrequency\">repeatFrequency</a> which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely.\n      This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also\n      have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.",
                "rdfs:label": "Schedule"
            },
            {
                "@id": "https://schema.org/EventStatusType",
                "@type": "rdfs:Class",
                "rdfs:comment": "EventStatusType is an enumeration type whose instances represent several states that an Event may be in.",
                "rdfs:label": "EventStatusType",
                "rdfs:subClassOf": {
                    "@id": "https://schema.org/Enumeration"
                }
            },
            {
                "@id": "https://schema.org/Enumeration",
                "@type": "rdfs:Class",
                "rdfs:comment": "Lists or enumerations—for example, a list of cuisines or music genres, etc.",
                "rdfs:label": "Enumeration",
            },
            {
                "@id": "https://schema.org/EventScheduled",
                "@type": "https://schema.org/EventStatusType",
                "rdfs:comment": "The event is taking place or has taken place on the startDate as scheduled. Use of this value is optional, as it is assumed by default.",
                "rdfs:label": "EventScheduled"
            },
            {
                "@id": "https://schema.org/EventCancelled",
                "@type": "https://schema.org/EventStatusType",
                "rdfs:comment": "The event has been cancelled. If the event has multiple startDate values, all are assumed to be cancelled. Either startDate or previousStartDate may be used to specify the event's cancelled date(s).",
                "rdfs:label": "EventCancelled"
            }
        ]
    };

    it('has right classes', () => {
        const generator = new SchemaGenerator();
        generator.parseSchema(graph);
        expect(generator.classPropertiesMap.size).toBe(3);
        expect(generator.classPropertiesMap.has("https://schema.org/entity1")).toBeTruthy();
        expect(generator.classPropertiesMap.has("https://schema.org/root")).toBeTruthy();
        expect(generator.classPropertiesMap.has("https://schema.org/Enumeration")).toBeTruthy();
        expect(generator.classPropertiesMap.has("https://schema.org/Schedule")).toBeFalsy();
    });

    it('has right enumerations', () => {
        const generator = new SchemaGenerator();
        generator.parseSchema(graph);
        expect(generator.enums.size).toBe(1);
    });

    it('EventStatusType has 2 values', () => {
        const generator = new SchemaGenerator();
        generator.parseSchema(graph);
        const eventStatus = generator.enums.get("https://schema.org/EventStatusType");
        expect(eventStatus.name).toBe("EventStatusType");
        expect(eventStatus.values.length).toBe(2);
    });

    it('entity1 has prop1 property', () => {
        const generator = new SchemaGenerator();
        generator.parseSchema(graph);
        const entity1 = generator.classPropertiesMap.get("https://schema.org/entity1");
        expect(entity1.properties.length).toBe(1);
        expect(entity1.properties[0].name).toBe("Property 1");
        expect(entity1.properties[0].types.length).toBe(1);
    });

    

});
