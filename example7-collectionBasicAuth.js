var fs = require('fs'),
    Collection = require('postman-collection').Collection,
    RequestAuth = require('postman-collection').RequestAuth,
    mycollection;

// Create a collection having two requests
myCollection = new Collection();
myCollection.items.add([
    {name: 'GET Request', request: 'https://postman-echo.com/get?auth=basic'},
    {name: 'PUT Request', request: 'https://postman-echo.com/put?auth=basic'},
]);

// Add basic auth to the Collection, to be applied on all requests.
myCollection.auth = new RequestAuth({
    type: 'basic',
    username: 'postman',
    password: 'password',
});

console.log(myCollection.auth);