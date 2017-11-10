var SDK = require('postman-collection'),
Collection = SDK.Collection,
Description = SDK.Description,
mycollection;

// create a blank collection
myCollection = new Collection();
myCollection.description = new Description({
content: '&lt;h1&gt;Hello World&lt;/h1&gt;&lt;p&gt;I am a Collection&lt;/p&gt;',
type: 'text/html'
});

// alternatively, you could also use the `.describe` method of any property to set or update the description of the
// property.
myCollection.describe('Hey! This is a cool collection.');

console.log(myCollection.description);