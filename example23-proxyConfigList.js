var ProxyConfigList = require('postman-collection').ProxyConfigList,
myProxyConfig = new ProxyConfigList({}, [
         {match: 'https://example.com/*', host: 'proxy.com', port: 8080, tunnel: true},
         {match: 'http+https://example2.com/*', host: 'proxy2.com'},
    ]);

console.log(myProxyConfig);