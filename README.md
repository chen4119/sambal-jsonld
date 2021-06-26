# Json-ld utilities

[Json-ld](https://en.wikipedia.org/wiki/JSON-LD) utility functions, support [schema.org](https://schema.org/) vocabulary.

# API

## isSchemaType

Check if a jsonld object is of schema.org type.  By default, all descendant types will return true.

```ts
isSchemaType(jsonld: unknown, type: string, descendants = true): boolean
```

Examples

```js
const obj = {
    "@id": "/blog1",
    "@type": "BlogPosting",
    ... other properties
}

isSchemaType(obj, "CreativeWork")           // return true
isSchemaType(obj, "creativework")           // return true - case insensitive
isSchemaType(obj, "CreativeWork", false)    // return false
```

## getEntityByType or getEntitiesByType

One really annoying thing about working with schema.org is that you can't really be sure whether a property value is an array or a single value.  The schema of an object can be pretty flexibe.  For example, a blog can have one author

```js
{
    "@type": "BlogPosting",
    author: {
        "@type": "Person",
        name: "John Smith"
    }
}
```

or multiple authors

```js
{
    "@type": "BlogPosting",
    author: [
        {
            "@type": "Person",
            name: "John Smith"
        },
        {
            "@type": "Person",
            name: "Jane Doe"
        }
    ]
}
```

Rather than repeatedly having if statements in your code, Sambal provide getEntityByType and getEntitiesByType to help alleviate this annoyance.

Use getEntityByType if you expect a single value or null if the object type doesn't exist

```ts
getEntityByType(jsonld: unknown, type: string, descendants = true)
```

Examples

```js
const obj = {
    "@type": "BlogPosting",
    author: [
        {
            "@type": "Person",
            name: "John Smith"
        },
        {
            "@type": "Person",
            name: "Jane Doe"
        }
    ]
}

getEntityByType(obj.author, "Person")           // return John Smith object
getEntityByType(obj.author, "person")           // return John Smith object - case insensitive
getEntityByType(obj.author, "Organization")     // return null
```

Use getEntitiesByType if you expect an array

```ts
getEntitiesByType(jsonld: unknown, type: string, descendants = true)
```

Examples

```js
const obj = {
    "@type": "BlogPosting",
    author: [
        {
            "@type": "Person",
            name: "John Smith"
        },
        {
            "@type": "Person",
            name: "Jane Doe"
        }
    ]
}

getEntitiesByType(obj.author, "Person")           // return array of both authors
getEntitiesByType(obj.author, "person")           // return array of both authors - case insensitive
getEntitiesByType(obj.author, "Organization")     // return []
```

