# Json-ld utilities

## Intro

[Json-ld](https://en.wikipedia.org/wiki/JSON-LD) utility functions, support [schema.org](https://schema.org/) vocabulary.


## API

```ts
toJsonLdGraph(jsonlds: unknown[], context: any)
```
__jsonlds__ - Array of json-ld 

__context__ - json-ld context

__response__ - A flatten json-ld graph object

```ts
graphToCondensedJsonLd(jsonldGraph: unknown, id?: string)
```
__jsonldGraph__ - json-ld graph

__id__ - select an @id node 

__response__ - A list of json-ld objects

```ts
expandJsonLd(jsonld: unknown)
```
__jsonld__ - json-ld object


