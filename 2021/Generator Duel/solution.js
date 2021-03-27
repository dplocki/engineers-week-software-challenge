const { loadInputFile, unitTest } = require("../common");

const VALUE_LIMIT = 2147483647;
const FIRST_GENERATOR_FACTOR = 16807;
const SECOND_GENERATOR_FACTOR = 48271;
const _16bit = Math.pow(2, 16);

function parseInput(input) {
    return input.split(/\r?\n/)
        .map(s => s.split(' '))
        .map(s => s[s.length - 1])
        .map(s => parseInt(s, 10));
}

function *generator(factor, startValue) {
    let value = startValue;

    while (true) {
        value *= factor;
        value %= VALUE_LIMIT;

        yield value;
    }
}

function judge(firstGenerator, secondGenerator) {
    let result = 0;

    for(let i = 40000000; i > 0; i--) {
        const first = firstGenerator.next().value % _16bit;
        const second = secondGenerator.next().value % _16bit;

        if (first === second) {
            result += 1;
        }
    }

    return result;
}

const testGeneratorA = generator(FIRST_GENERATOR_FACTOR, 65);
unitTest(testGeneratorA.next().value, 1092455);
unitTest(testGeneratorA.next().value, 1181022009);
unitTest(testGeneratorA.next().value, 245556042);
unitTest(testGeneratorA.next().value, 1744312007);
unitTest(testGeneratorA.next().value, 1352636452);

const testGeneratorB = generator(SECOND_GENERATOR_FACTOR, 8921);
unitTest(testGeneratorB.next().value, 430625591);
unitTest(testGeneratorB.next().value, 1233683848);
unitTest(testGeneratorB.next().value, 1431495498);
unitTest(testGeneratorB.next().value, 137874439);
unitTest(testGeneratorB.next().value, 285222916);

unitTest(judge(generator(FIRST_GENERATOR_FACTOR, 65), generator(SECOND_GENERATOR_FACTOR, 8921)), 588);

const [firstStartValue, secondStartValue] = parseInput(loadInputFile('input.txt'));

console.log(
    'Solution:',
    judge(
        generator(FIRST_GENERATOR_FACTOR, firstStartValue),
        generator(SECOND_GENERATOR_FACTOR, secondStartValue)
    ));
