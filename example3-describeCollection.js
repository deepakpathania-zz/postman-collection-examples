var Collection = require('postman-collection').Collection,
    mycollection;

// create a blank collection
myCollection = new Collection();
myCollection.describe('Hey! This is a cool collection.');

console.log(myCollection.description.toString()); // read the description