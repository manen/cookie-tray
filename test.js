const cookie = require('./dist/index');
const assert = require('assert');

const original = { key: 'value', bruh: 'moment' };
const str = cookie.stringify(original);
const back = cookie.parse(str);

assert.strictEqual(str, 'key=value; bruh=moment');
assert.strictEqual(JSON.stringify(back), JSON.stringify(original));

console.log('Tests passed!');
