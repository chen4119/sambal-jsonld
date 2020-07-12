# Json-ld utilities

## Intro

[Json-ld](https://en.wikipedia.org/wiki/JSON-LD) utility functions to transform any json data to json-ld.  Support [schema.org](https://schema.org/) vocabularies.


## API

```ts
toSchemaOrgJsonLd(json: any, type: string, context?: any)
```
__json__ - any json data

__type__ - schema.org type name

__context__ - json-ld context

__response__ - a schema.org json-ld object, automatically removing any fields with incorrect type or not in the type schema

```ts
async hydrateJsonLd(json: object, fetcher: (url) => Promise<any>, context?: any)
```
__json__ - any json data

__fetcher__ - User defined fetcher function to load url

__context__ - json-ld context

__response__ - a json object with all nested @id references populated

```ts
toJsonLdGraph(jsonlds: object[], context: any)
```
__jsonlds__ - Array of json-ld 

__context__ - json-ld context

__response__ - A flatten json-ld graph object

```ts
graphToCondensedJsonLd(jsonldGraph: object, id?: string)
```
__jsonldGraph__ - json-ld graph

__id__ - select an @id node 

__response__ - A list of json-ld objects

