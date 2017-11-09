var fs = require('fs'), // needed to read JSON file from disk
Collection = require('postman-collection').Collection,
myCollection;

// Load a collection to memory from a JSON file on disk (say, sample-collection.json)
myCollection = new Collection(JSON.stringify(fs.readFileSync('sample-collection.json').toString()));

// Add an event listener to the collection that listens to the `test` event.
myCollection.events.add({
listen: 'test',
script: {
    exec: 'tests["Status code is 200"] = (responseCode.code === 200)'
}
});

console.log(myCollection.events);