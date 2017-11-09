var Certificate = require('postman-collection').Certificate,
certificate = new Certificate({
    name: 'Certificate for example.com',
    matches: ['example.com'],
    key: { src: '/User/path/to/certificate/key' },
    cert: { src: '/User/path/to/certificate' },
    passphrase: 'iampassphrase'
});

console.log(certificate); 
