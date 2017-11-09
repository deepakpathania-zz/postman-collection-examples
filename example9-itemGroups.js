var fs = require('fs'), // needed to read JSON file from disk
Collection = require('postman-collection').Collection,
myCollection,
emptyGroups;
// Load a collection to memory from a JSON file on disk (say, sample-collection.json)
myCollection = new Collection(JSON.stringify(fs.readFileSync('sample-collection.json').toString()));

// Filter items in Collection root that is an empty ItemGroup
emptyGroups = myCollection.items.filter(function (item) {
return item && item.items && (item.items.count() === 0);
});

// Log the emptyGroups array to check it's contents
console.log(emptyGroups);