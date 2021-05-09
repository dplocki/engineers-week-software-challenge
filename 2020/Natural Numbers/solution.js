const { toLines, toMD5, unitTest, loadInputFile } = require("../../utils/common");

function *getDivisors(n) {
    for (let i = 1; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i !== 0) {
            continue;
        }

        const tmp = parseInt(n / i);

        yield i;
        if (tmp !== i) {
            yield tmp;
        }
    }
}

function *naturalNumberGenerator() {
    let current = 0, sum = 0;

    while (true) {
        current++;
        sum += current;

        yield [ current, sum, Array.from(getDivisors(sum)).length ];
    }
}

function *findAtLeastDivisors() {
    const generator = naturalNumberGenerator();
    let divisors = 0;
    let requested = 0;
    let result = 0;
    let _;

    while (true) {
        requested = yield result;

        while (divisors < requested) {
            [ result, _, divisors ] = generator.next().value;
        } 
    }
}

function calculateHash(input) {
    const generator = findAtLeastDivisors();
    // fist send value is ignored (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
    generator.next(0);

    return toMD5(
        toLines(input)
            .map(l => parseInt(l))
            .map(n => generator.next(n).value)
            .map(s => `${s}\n`)
            .join(''));
}

unitTest('ad16bbf8263b30537ffcffb6b9873b60', calculateHash(`5
10
15
20`));

console.log('Solution', calculateHash(loadInputFile('trials.txt')));
