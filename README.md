# image-search-abstraction
FreeCodeCamp API Challenge #4

This web application returns an array of simplified objects containing search results from http://duckduckgo.com.

#### Example

Submitting `/search/searchterm` will search http://duckduckgo.com for 'searchterm' and return an array of objects like the following:

```json
[{
  "url": "image source URL",
  "alt": "image alt text",
  "src": "URL of image source page"
}]
```

### Pagination

Results can be paged through the offset query.

Submitting `/search/searchterm?offset=3` will offset the search results for 'searchterm' by three.

If an offset is not supplied, it will default to zero.

### History

Submitting `/history` will return an array of recent searches like the following:

```json
[{
  "term": "search term",
  "when": "time the search occurred"
}]
```
