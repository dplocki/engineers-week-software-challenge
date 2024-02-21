const { loadInputFile, toLines, toMD5 } = require("../../utils/common");

function convertToBinary(number) {
    if (number > 0) {
        return convertToBinary(parseInt(number / 2)) + (number % 2)
    };

    return '';
}

function binaryGap(number) {
    const binary = convertToBinary(number);
    const results = [ 0 ];
    let result = 0;

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == '1') {
            results.push(result);
            result = 0;
        } else {
            result += 1;
        }
    }

    return Math.max(...results);
}

console.assert(binaryGap(529) == 4);
console.assert(binaryGap(20) == 1);
console.assert(binaryGap(15) == 0);
console.assert(binaryGap(32) == 0);
console.assert(binaryGap(1041) == 5);

console.log('Solution', toMD5(toLines(loadInputFile('test.txt')).map(binaryGap).join('')));
