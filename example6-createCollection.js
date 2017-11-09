var fs = require('fs'),
    Collection = require('postman-collection').Collection,
    mycollection;

myCollection = new Collection({
    info: {
        name: "my Collection"
    }
});

// log the collection to console to see its contents
fs.writeFileSync('myCollection.postman_collection', JSON.stringify(myCollection, null, 2));