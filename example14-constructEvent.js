var Event = require('postman-collection').Event,
rawEvent = {
    listen: 'test',
    script: 'tests["response code is 401"] = responseCode.code === 401'
},
myEvent;
myEvent = new Event(rawEvent);

console.log(myEvent);