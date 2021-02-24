const { loadInputFile, pipe, unitTest, toMD5 } = require('../common');

function solution(input) {
    return input
        .split('\n')
        .map(l => l.trim().length)
        .map(l => l.toString() + '\n')
        .join('');
}

const buildFlag = pipe(solution, toMD5);

unitTest(
    buildFlag('Hello, world\nThis tests the line lengths\nof multiple lines'),
    'fbdd4c7c05d0baf5b247a9c55352f3b5');

console.log(buildFlag(loadInputFile('input.txt')));
