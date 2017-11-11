var fs = require('fs'), // needed to read JSON file from disk
Collection = require('postman-collection').Collection,
myCollection;

// Load a collection to memory from a JSON file on disk (say, sample-collection.json)
myCollection = new Collection(JSON.stringify(fs.readFileSync('sample-collection.json').toString()));

// assuming the collection has a request called "my-request-1" in root, we get it's test events
myCollection.items.one("my-request-1").getEvents("test").forEach(function (event) {
event.script && eval(event.script.toSource());
});