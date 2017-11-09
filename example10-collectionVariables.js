var fs = require('fs'),
Collection = require('postman-collection').Collection,
mycollection;

// Create a new empty collection.
myCollection = new Collection();

// Add a variable to the collection
myCollection.variables.add({
    id: 'apiBaseUrl',
    value: 'http://timeapi.org',
    type: 'string'
});

//Add a request that uses the variable that we just added.
myCollection.items.add({
    id: 'utc-time-now',
    name: 'Get the current time in UTC',
    request: '{{apiBaseUrl}}/utc/now'
});

console.log(myCollection.oneDeep('utc-time-now').request.url.host);