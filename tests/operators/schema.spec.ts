import { isSchemaType, getEntitiesByType, getEntityByType } from "../../src/operators/schema";
import { JSONLD_ID, JSONLD_TYPE } from "../../src/constants";

describe('schema', () => {

    describe('isSchemaType', () => {

        it("blogposting is an article", () => {
            const jsonld = {
                [JSONLD_ID]: "",
                [JSONLD_TYPE]: "BlogPosting"
            };
            expect(isSchemaType(jsonld, "Article")).toBeTruthy();
        });

        it("blogposting is not an article if descendents = false", () => {
            const jsonld = {
                [JSONLD_ID]: "",
                [JSONLD_TYPE]: "BlogPosting"
            };
            expect(isSchemaType(jsonld, "Article", false)).toBeFalsy();
        });
    
        it("article is an article", () => {
            const jsonld = {
                [JSONLD_ID]: "",
                [JSONLD_TYPE]: "article"
            };
            expect(isSchemaType(jsonld, "Article")).toBeTruthy();
        });
    
        it("person is not an article", () => {
            const jsonld = {
                [JSONLD_ID]: "",
                [JSONLD_TYPE]: "person"
            };
            expect(isSchemaType(jsonld, "Article")).toBeFalsy();
        });

    });

    it("get all articles", () => {
        const list = [
            {
                [JSONLD_ID]: "",
                [JSONLD_TYPE]: "BlogPosting"
            },
            {
                [JSONLD_ID]: "",
                [JSONLD_TYPE]: "socialmediaposting"
            },
            {
                [JSONLD_ID]: "",
                [JSONLD_TYPE]: "person"
            }
        ]
        expect(getEntitiesByType(list, "Article").length).toBe(2);
    });

    it("get first article", () => {
        const list = [
            {
                [JSONLD_ID]: "",
                [JSONLD_TYPE]: "BlogPosting"
            },
            {
                [JSONLD_ID]: "",
                [JSONLD_TYPE]: "socialmediaposting"
            },
            {
                [JSONLD_ID]: "",
                [JSONLD_TYPE]: "person"
            }
        ]
        const entity = getEntityByType(list, "Article");
        expect(entity[JSONLD_TYPE]).toBe("BlogPosting");
    });





});
