var ProxyConfig = require('postman-collection').ProxyConfig,
myProxyConfig = new ProxyConfig({
    host: 'proxy.com',
    match: 'http+https://example.com/*',
    port: 8080,
    tunnel: true,
    disabled: false
});

console.log(myProxyConfig);