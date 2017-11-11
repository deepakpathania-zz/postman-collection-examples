var Collection = require('postman-collection').Collection,
Item = require('postman-collection').Item,
myCollection;

myCollection = new Collection({
"item": [{
    "name": "Send a GET request",
    "id": "my-get-request",
    "request": {
        "url": 'https://postman-echo.com/get',
        "method": "GET"
    }
}]
}); // create a collection with one request

// add a pre-request script to the event list
myCollection.items.one('my-get-request').events.add({
"listen": "prerequest",
"script": {
    "type": "text/javascript",
    "exec": "console.log(new Date())"
}
});

console.log(myCollection.items.one('my-get-request').events.members[0].script);