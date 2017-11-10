var Cookie = require('postman-collection').Cookie,
rawHeader = 'myCookie=myValue;Path=/;Expires=Sun, 04-Feb-2018 14:18:27 GMT;Secure;HttpOnly;Priority=HIGH'
myCookie = new Cookie(rawHeader);

console.log(myCookie.toJSON());