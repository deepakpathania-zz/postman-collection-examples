var Header = require('postman-collection').Header,
header = new Header({
    key: 'Content-Type',
    value: 'application/xml'
});

console.log(header.toString()) // prints the string representation of the Header.