const { toLines, toMD5, unitTest, loadInputFile } = require("../../utils/common");

function countStepsNumber(amount) {
    let steps = 0;
    while (amount > 1) {
        if (amount % 2 === 0) {
            amount /= 2;
        } else {
            amount -= 1;
        }

        steps += 1;
    }

    return steps;
}

function solution(numbers) {
    return toMD5(
        numbers
            .map(l => countStepsNumber(l))
            .map(s => `${s}\n`)
            .join('')
        );
}

const testSet = toLines(`2
15
16
50
200`);

unitTest('9f237b6e14f68b7a7c982192bb619324', solution(testSet))

console.log('Solution:', solution(toLines(loadInputFile('trials.txt'))));
