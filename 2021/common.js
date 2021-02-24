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

exports.unitTest = (expected, recived) => {
    assert.strictEqual(expected, recived, `Excepted: "${expected}, result: ${recived}`);
}

exports.loadInputFile = (name) => {
    return fs
        .readFileSync(name)
        .toString();
}
