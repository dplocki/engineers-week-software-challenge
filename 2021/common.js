const crypto = require('crypto');
const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

exports.pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

exports.toMD5 = (value) => {
    return crypto
        .createHash('md5')
        .update(value)
        .digest('hex');
}

exports.unitTest = (expected, received) => {
    assert.strictEqual(expected, received, `Excepted: "${expected}, result: ${received}`);
}

exports.loadInputFile = (name) => {
    return fs
        .readFileSync(name)
        .toString();
}

exports.toLines = (v) => v.split(/\r?\n/);
