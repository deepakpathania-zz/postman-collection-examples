var Collection = require('postman-collection').Collection,
    Item = require('postman-collection').Item,
    myCollection;

myCollection = new Collection({
    "item": [{
        "id": "my-folder-1",
        "name": "The solo folder in this collection",
        "item": [] // blank array indicates this is a folder
    }]
}); // create a collection with an empty folder
// add a request to "my-folder-1" that sends a GET request
myCollection.items.one("my-folder-1").items.add(new Item({
    "name": "Send a GET request",
    "id": "my-get-request",
    "request": {
        "url": "https://postman-echo.com/get",
        "method": "GET"
    }
}));

console.log(myCollection.items);