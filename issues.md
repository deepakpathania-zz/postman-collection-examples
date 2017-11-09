# Issues in examples.

1. [collection/certificate.js line 20](http://www.postmanlabs.com/postman-collection/collection_certificate.js.html#line20) - * @property {{ src: (String) }} [cert] Object with path on the file system **fot** certificate file, as src.
   * `Typo - should be for.`
2. [Certificate List example](http://www.postmanlabs.com/postman-collection/CertificateList.html) - Doesn't `require('postman-collection').CertificateList` before using in the example.
   * Fixed in [example 4](https://github.com/deepakpathania/postman-collection-examples/example4-certificateList.js)
3. [Load collection example](http://www.postmanlabs.com/postman-collection/Collection.html) Calls `inspect` function, which is undefined, instead of `pretty`.
   * Fixed in [example 5](https://github.com/deepakpathania/postman-collection-examples/example5-loadCollectionPretty.js)
4. [Write collection to file example](http://www.postmanlabs.com/postman-collection/Collection.html) The `toString()` method writes the collection as `[object Object]` rather than actual data.
    * Fixed in [example 6](https://github.com/deepakpathania/postman-collection-examples/example6-createCollection.js)
5. [Collection variable example](http://www.postmanlabs.com/postman-collection/Collection.html) The `{{apiBaseUrl}}` doesn't resolve to the variable value in the request.
    * Documented in [example 10](https://github.com/deepakpathania/postman-collection-examples/example10-collectionVariables.js)