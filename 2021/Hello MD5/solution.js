const crypto = require('crypto');
const assert = require('assert').strict;

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

function toMD5(value) {
    return crypto
        .createHash('md5')
        .update(value)
        .digest('hex');
}

function loadInputFile(name) {
    return require('fs')
        .readFileSync(require('path').join(__dirname, name))
        .toString();
}

function solution(input) {
    return input 
        .split('\n')
        .map(l => l.trim().length)
        .map(l => l.toString() + '\n')
        .join('');
}

const buildFlag = pipe(solution, toMD5);

assert.strictEqual(
    buildFlag('Hello, world\nThis tests the line lengths\nof multiple lines'),
    'fbdd4c7c05d0baf5b247a9c55352f3b5');

console.log(buildFlag(loadInputFile('input.txt')));
