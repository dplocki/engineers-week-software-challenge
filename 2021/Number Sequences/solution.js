const { unitTest, loadInputFile, toMD5 } = require("../common");

function calculateSum(number) {
    const digitsCount = number.length;

    return Array.from(number)
        .filter((d, i, w) => w[(i + 1) % digitsCount] === d)
        .map(d => parseInt(d, 10))
        .reduce((a, b) => a + b, 0);
}

unitTest(calculateSum('1122'), 3);
unitTest(calculateSum('1111'), 4);
unitTest(calculateSum('1234'), 0);

console.log(
    toMD5(
        loadInputFile('input.txt')
            .split('\n')
            .map(calculateSum)
            .map(l => l.toString() + '\n')
            .join(''))
);

