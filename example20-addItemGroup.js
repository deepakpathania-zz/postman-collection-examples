var Collection = require('postman-collection').Collection,
ItemGroup = require('postman-collection').ItemGroup,
myCollection;

myCollection = new Collection(); // create an empty collection
myCollection.items.add(new ItemGroup({ // add a folder called "blank folder"
    "name": "This is a blank folder"
}));

console.log(myCollection.items);