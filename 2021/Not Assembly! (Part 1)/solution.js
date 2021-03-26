const { loadInputFile } = require("../common");

function parseProgram(input) {
    return input.split(/\r?\n/)
        .map(l => l
            .split(' ')
            .map(s => s.match(/-?\d+/) ? parseInt(s, 10) : s)
        );
}

function runProgram(program) {
    const registers = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0 };
    const getValue = v => Number.isInteger(v) ? v : registers[v];
    const operations = {
        set: (x, y, index) => { registers[x] = getValue(y); return index + 1; },
        sub: (x, y, index) => { registers[x] -= getValue(y); return index + 1; },
        mul: (x, y, index) => { registers[x] *= getValue(y); return index + 1; },
        jnz: (x, y, index) => { return index + (registers[x] !== 0 ? y : 1); }
    };

    const programSize = program.length;

    let index = 0;
    let mulCount = 0;

    while (index >= 0 && index < programSize) {
        const instruction = program[index];
        index = operations[instruction[0]](instruction[1], instruction[2], index);

        if (instruction[0] === 'mul') {
            mulCount += 1;
        }        
    }

    return mulCount;
}

console.log(
    'Solution or the task:',
    runProgram(parseProgram(loadInputFile('input.txt')))
);
