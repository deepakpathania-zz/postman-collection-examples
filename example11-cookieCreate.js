var Cookie = require('postman-collection').Cookie,
myCookie = new Cookie({
    name: 'my-cookie-name',
    expires: '1464769543832', // UNIX timestamp, in *milliseconds*
    maxAge: '300',  // In seconds. In this case, the Cookie is valid for 5 minutes
    domain: 'something.example.com',
    path: '/',
    secure: false,
    httpOnly: true,
    session: false,
    value: 'my-cookie-value',
    extensions: [{
        key: 'Priority',
        value: 'HIGH'
    }]
});

console.log(myCookie);