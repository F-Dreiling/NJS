// NPM
// npm --version
// Local dependency: npm install <package>
// Global dependency: npm install -g <package>
// npm init -y

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);