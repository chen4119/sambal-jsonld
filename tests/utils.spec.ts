import {
    flatMap,
    isSchemaOrgEnumeration,
    getSchemaOrgParentTypes,
    makeAbsoluteSchemaOrgIRI
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

});
