import JsonLd from "../src/JsonLd";

describe('Parse graph', () => {
    const graph = {
        "@context": "http://schema.org/",
        "@graph": [
            {
                "id": "_:b0",
                "type": "Person",
                "jobTitle": "Professor",
                "name": "Jane Doe",
                "telephone": "(425) 123-4567",
                "url": "http://www.janedoe.com"
            }
        ]
    };
    beforeEach(() => {
        
    });

    it('should create an action to add a todo', () => {
        const j = new JsonLd(graph);
        console.log(j.flatten());
    })
})