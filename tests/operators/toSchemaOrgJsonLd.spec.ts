import {toSchemaOrgJsonLd} from "../../src/operators/toSchemaOrgJsonLd";

describe('toSchemaOrgJsonLd', () => {
    
    describe('person', () => {
        const person = {
            "name": "Jane Doe",
            "firstName": "Wan Chun",
            "telephone": "(425) 123-4567",
            "url": "http://www.janedoe.com",
            "sameAs": [
                "https://github.com/chen4119",
                "https://www.linkedin.com/in/wan-chun-chen-9a95a010"
            ]
        };
    
        it("to schema.org", () => {
            const schema = toSchemaOrgJsonLd(person, "Person");
            expect(schema).toMatchSnapshot();
        });

        it("to schema.org with givenName", () => {
            const schema = toSchemaOrgJsonLd(person, "Person", {firstName: "http://schema.org/givenName"});
            expect(schema).toMatchSnapshot();
        });
    });

    describe('blogpost', () => {
        const blogPost = {
            "@id": "blog1",
            headline: "Fourth post",
            description: "Some description",
            author: {
                "@id": "fasdf",
                "@type": "Person",
                "name": "Jane Doe",
                "telephone": "(425) 123-4567",
                "url": "http://www.janedoe.com"
            },
            dateCreated: "2019-09-06",
            keywords: ["schema.org"],
            version: 3
        };
    
        it("to schema.org", () => {
            const schema = toSchemaOrgJsonLd(blogPost, "BlogPosting");
            expect(schema).toMatchSnapshot();
        });

        it("to schema.org with absolute @id URI", () => {
            const schema = toSchemaOrgJsonLd(blogPost, "BlogPosting", {"@base": "http://chen4119.me#"});
            expect(schema).toMatchSnapshot();
        });

        it("remove dateCreated if format is invalid", () => {
            const customBlogPost = {
                ...blogPost,
                dateCreated: "abs"
            }
            const schema = toSchemaOrgJsonLd(customBlogPost, "BlogPosting");
            expect(schema.dateCreated).not.toBeDefined();
        });

        it("can use datetime format for dateCreated", () => {
            const customBlogPost = {
                ...blogPost,
                dateCreated: "2019-09-06T18:39:29"
            }
            const schema = toSchemaOrgJsonLd(customBlogPost, "BlogPosting");
            expect(schema.dateCreated).toBeDefined();
        });

        it("can use timezone datetime format for dateCreated", () => {
            const customBlogPost = {
                ...blogPost,
                dateCreated: "2019-09-06T18:39:29-05:00"
            }
            const schema = toSchemaOrgJsonLd(customBlogPost, "BlogPosting");
            expect(schema.dateCreated).toBeDefined();
        });

        it("can use Date for dateCreated", () => {
            const customBlogPost = {
                ...blogPost,
                dateCreated: new Date()
            }
            const schema = toSchemaOrgJsonLd(customBlogPost, "BlogPosting");
            expect(schema.dateCreated).toBeDefined();
        });
    });

});
