// Modules
// Node uses CommonJS, every file in node is a module

const names = require('./4-names');
const utils = require('./5-utils');
const alt = require('./6-alternative');
require('./7-mind-grenade');

console.log(module);

console.log(names);
console.log(alt);

utils.sayHi(names.tanya);
utils.sayHi(names.felix);
utils.sayWhat(names.yoko);