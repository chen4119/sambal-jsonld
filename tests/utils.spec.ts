import {
    flatMap,
    isSchemaOrgEnumeration,
    getSchemaOrgParentTypes,
    makeAbsoluteSchemaOrgIRI,
    normalizeUri,
    parseUri
} from "../src/utils";

describe("utils", () => {

    describe("flatMap", () => {
        it("flatten string array", () => {
            const array = ["value1", "value2", ["value3", ["value4", "value5"]], ["value6"]]
            const result = flatMap(array);
            expect(result).toStrictEqual(["value1", "value2", "value3", "value4", "value5", "value6"]);
        });
    });

    describe("isSchemaOrgEnumeration", () => {
        it("GenderType is enumeration", () => {
            expect(isSchemaOrgEnumeration(makeAbsoluteSchemaOrgIRI("GenderType"))).toBeTruthy();
        });

        it("Person is not enumeration", () => {
            expect(isSchemaOrgEnumeration(makeAbsoluteSchemaOrgIRI("Person"))).toBeFalsy();
        });
    });

    describe("getSchemaOrgParentTypes", () => {
        it("No duplicate parents for HowToStep", () => {
            const parents = getSchemaOrgParentTypes(makeAbsoluteSchemaOrgIRI("HowToStep"));
            expect(parents.length).toBe(5);
            expect(parents.indexOf("CreativeWork")).toBeGreaterThanOrEqual(0);
            expect(parents.indexOf("Intangible")).toBeGreaterThanOrEqual(0);
            expect(parents.indexOf("Thing")).toBe(4);
        });

        it("Order of parents for Restaurant is correct", () => {
            const parents = getSchemaOrgParentTypes(makeAbsoluteSchemaOrgIRI("Restaurant"));
            expect(parents.indexOf("FoodEstablishment")).toBe(0);
            expect(parents.indexOf("LocalBusiness")).toBe(1);
            expect(parents.indexOf("Thing")).toBe(4);
        });
    });

    describe("normalizeUri", () => {

        it("No double slash for relative path", () => {
            const result = normalizeUri("/path1//path2");
            expect(result).toBe("/path1/path2");
        });

        it("No double slash for relative path 2", () => {
            const result = normalizeUri("path1//path2");
            expect(result).toBe("path1/path2");
        });

        it("No double slash for absolute path", () => {
            const result = normalizeUri("https://path1//path2");
            expect(result).toBe("https://path1/path2");
        });

        it("Works for absolute path with different protocol", () => {
            const result = normalizeUri("fs://path1//path2");
            expect(result).toBe("fs://path1/path2");
        });

        it("Works for // absolute path", () => {
            const result = normalizeUri("//path1//path2");
            expect(result).toBe("//path1/path2");
        });

        it("Encode uri pathname", () => {
            const result = normalizeUri("path1/path 2");
            expect(result).toBe("path1/path%202");
        });

        it("Encode query params", () => {
            const result = normalizeUri("path1/path 2?title=hello world&description=test");
            expect(result).toBe("path1/path%202?title=hello+world&description=test");
        });
    });

    describe("parseUri", () => {

        it("Parse abs url with query params", () => {
            const result = parseUri("https://sambal.dev/subfolder/page1?title=hello world&description=test");
            expect(result.protocol).toBe("https:");
            expect(result.host).toBe("sambal.dev");
            expect(result.path).toBe("/subfolder/page1");
            expect(result.query.get("title")).toBe("hello world");
        });

        it("Parse custom protocol localhost abs url", () => {
            const result = parseUri("fs://localhost/sub folder/page1");
            expect(result.protocol).toBe("fs:");
            expect(result.host).toBe("localhost");
            expect(result.path).toBe("/sub%20folder/page1");
        });

        it("Parse abs url with hash", () => {
            const result = parseUri("https://sambal.dev/subfolder/page1#header1");
            expect(result.protocol).toBe("https:");
            expect(result.host).toBe("sambal.dev");
            expect(result.path).toBe("/subfolder/page1");
        });

        it("Parse relative url", () => {
            const result = parseUri("/sub%20folder/page1");
            expect(result.path).toBe("/sub%20folder/page1");
        });

        it("Parse relative url with base url", () => {
            const result = parseUri("/sub folder/page1", "https://sambal.dev");
            expect(result.protocol).toBe("https:");
            expect(result.host).toBe("sambal.dev");
            expect(result.path).toBe("/sub%20folder/page1");
        });

    });

});
