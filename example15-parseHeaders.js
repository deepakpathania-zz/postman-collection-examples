var Header = require('postman-collection').Header,
    headerString = 'Content-Type: application/json\nUser-Agent: MyClientLibrary/2.0\n';

var rawHeaders = Header.parse(headerString);
console.log(rawHeaders); // [{ 'Content-Type': 'application/json', 'User-Agent': 'MyClientLibrary/2.0' }]

var headers = rawHeaders.map(function (h) {
    return new Header(h);
});

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; //fallback
    }
    else {
        console.log("Assertion passed");
    }
}

assert(headerString.trim() == Header.unparse(headers).trim());