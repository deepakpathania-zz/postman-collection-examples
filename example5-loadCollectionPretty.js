var fs = require('fs'), // needed to read JSON file from disk
pretty = function (obj) { // function to neatly log the collection object to console
    return require('util').inspect(obj, {colors: true});
},
Collection = require('postman-collection').Collection,
myCollection;

// Load a collection to memory from a JSON file on disk (say, sample-collection.json)
myCollection = new Collection(JSON.stringify(fs.readFileSync('sample-collection.json').toString()));

// log items at root level of the collection
console.log(pretty(myCollection));