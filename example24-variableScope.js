var VariableScope = require('postman-collection').VariableScope;
var env = new VariableScope([{
    key: 'var1',
    value: 'one'
}, {
    key: 'var2',
    value: 2,
    type: 'number'
}, {
    key: 'var3',
    value: true,
    type: 'boolean'
}]),
obj;

// get all variables consolidated as an object
obj = env.variables();

Object.keys(obj).forEach(function(varname) {
    console.log(obj[varname]); // log all variables
});