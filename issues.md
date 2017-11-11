# Issues in examples.

1. [collection/certificate.js line 20](http://www.postmanlabs.com/postman-collection/collection_certificate.js.html#line20) - * @property {{ src: (String) }} [cert] Object with path on the file system **fot** certificate file, as src.
   * `Typo - should be for.`
2. [Certificate List example](http://www.postmanlabs.com/postman-collection/CertificateList.html) - Doesn't `require('postman-collection').CertificateList` before using in the example.
   * Fixed in [example 4](https://github.com/deepakpathania/postman-collection-examples//blob/master/example4-certificateList.js)
3. [Load collection example](http://www.postmanlabs.com/postman-collection/Collection.html) Calls `inspect` function, which is undefined, instead of `pretty`.
   * Fixed in [example 5](https://github.com/deepakpathania/postman-collection-examples//blob/master/example5-loadCollectionPretty.js)
4. [Write collection to file example](http://www.postmanlabs.com/postman-collection/Collection.html) The `toString()` method writes the collection as `[object Object]` rather than actual data.
    * Fixed in [example 6](https://github.com/deepakpathania/postman-collection-examples//blob/master/example6-createCollection.js)
5. [Collection variable example](http://www.postmanlabs.com/postman-collection/Collection.html) The `{{apiBaseUrl}}` doesn't resolve to the variable value in the request.
    * Documented in [example 10](https://github.com/deepakpathania/postman-collection-examples//blob/master/example10-collectionVariables.js)
6. [collection/cookie.js line 32](http://www.postmanlabs.com/postman-collection/collection_cookie.js.html#line32) * @property {String=} [expires] Expires sets an expiry date for when a **coo0kie** gets deleted. It should either be a
    * `Typo - should be cookie.`
7. [Cookie create example](http://www.postmanlabs.com/postman-collection/Cookie.html) Missing comma after maxAge property while instantiating `myCookie`.
    * Fixed in [example 11](https://github.com/deepakpathania/postman-collection-examples//blob/master/example11-cookieCreate.js)
8. [Header parse example](http://www.postmanlabs.com/postman-collection/Header.html) `assert` not defined, strings not being trimmed before matching.
    * Fixed in [example 15](https://github.com/deepakpathania/postman-collection-examples//blob/master/example15-parseHeaders.js)
9. [Create header example](http://www.postmanlabs.com/postman-collection/Header.html) `Create a Header` added in the code example block.
    * Fixed in [example 16](https://github.com/deepakpathania/postman-collection-examples//blob/master/example16-createHeader.js)

10. [Add item to collection example](http://www.postmanlabs.com/postman-collection/Item.html) - Missing `items` in adding to collection syntax(should be `myCollection.items.one("my-folder-1").items.add`), quotes mismatch on `request.url`.
    * Fixed in [example 17](https://github.com/deepakpathania/postman-collection-examples//blob/master/example17-addItem.js)

11. [Add script to collection example](http://www.postmanlabs.com/postman-collection/Item.html) - Missing `,` after `"id": "my-get-request"`, quotes mismatch in `request.url`. 
    * Fixed in [example 18](https://github.com/deepakpathania/postman-collection-examples//blob/master/example18-addScript.js)

12. [Add itemGroup to collection example](http://www.postmanlabs.com/postman-collection/ItemGroup.html) - Missing `items` in adding to collection syntax(should be `myCollection.items.add(new ItemGroup({..})`).
    * Fixed in [example 20](https://github.com/deepakpathania/postman-collection-examples//blob/master/example20-addItemGroup.js)

13. [Sample itemList json](http://www.postmanlabs.com/postman-collection/ItemGroup.html) - Missing quote end in `script` key.


14. [ProxyConfig JSON](http://www.postmanlabs.com/postman-collection/ProxyConfig.html) - Invalid JSON, property keys not quoted, missing `,` after `port` key.

15. [VariableScope iteration Example](http://www.postmanlabs.com/postman-collection/VariableScope.html) - Doesn't `require('postman-collection').VariableScope` before using in the example.
    * Fixed in [example 24](https://github.com/deepakpathania/postman-collection-examples//blob/master/example24-variableScope.js)