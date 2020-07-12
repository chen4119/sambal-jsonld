import {hydrateJsonLd} from "../../src/operators/hydrateJsonLd";
import {SCHEMA_CONTEXT, JSONLD_ID} from "../../src/constants";

describe('hydrateJsonLd', () => {
    const mockFetcher = jest.fn();
    let blogPost;

    beforeEach(() => {
        blogPost = {
            headline: "Fourth post",
            description: "Some description",
            author: {
                "@id": "https://chen4119.me/about.html#about"
            },
            address: {
                "@id": "_:jsonld/address.yml"
            },
            dateCreated: "2019-09-06",
            keywords: ["schema.org"]
        };
    });

    afterEach(() => {
        mockFetcher.mockClear();
    });

    it("fetch local and http @id", async () => {
        mockFetcher.mockImplementation(uri => {
            if (uri === "https://chen4119.me/about.html#about") {
                return {
                    name: "Jane doe",
                    email: "jane@hotmail.com"
                };
            } else if (uri === "jsonld/address.yml") {
                return {
                    street: "123 main st",
                    state: "NY"
                };
            }
        }); 
        const json = await hydrateJsonLd(blogPost, mockFetcher);
        expect(mockFetcher).toHaveBeenCalledWith("https://chen4119.me/about.html#about");
        expect(mockFetcher).toHaveBeenCalledWith("jsonld/address.yml");
        expect(json).toMatchSnapshot();
    });

    it("recursively fetch @id", async () => {
        mockFetcher.mockImplementation(uri => {
            if (uri === "https://chen4119.me/about.html#about") {
                return {
                    name: "Jane doe",
                    email: "jane@hotmail.com",
                    profile: {
                        "@id": "https://linkedin.com/jane"
                    }
                };
            } else if (uri === "jsonld/address.yml") {
                return {
                    street: "123 main st",
                    state: "NY"
                };
            } else if (uri === "https://linkedin.com/jane") {
                return {
                    "worksFor": [{
                            "@type": "Organization",
                            "name": "Big company"
                    }]
                };
            }
        }); 
        const json = await hydrateJsonLd(blogPost, mockFetcher);
        expect(mockFetcher).toHaveBeenCalledWith("https://chen4119.me/about.html#about");
        expect(mockFetcher).toHaveBeenCalledWith("jsonld/address.yml");
        expect(mockFetcher).toHaveBeenCalledWith("https://linkedin.com/jane");
        expect(json).toMatchSnapshot();
    });

    it("do nothing for plain old json", async () => {
        const plainJson = {
            headline: "Fourth post",
            description: "Some description"
        }
        const json = await hydrateJsonLd(plainJson, mockFetcher);
        expect(mockFetcher).not.toHaveBeenCalled();
        expect(json).toStrictEqual(plainJson);
    });
    

});
