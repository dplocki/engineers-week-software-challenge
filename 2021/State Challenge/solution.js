const { unitTest, loadInputFile } = require("../common");

function getPreLastCharacter(value) {
    return value[value.length - 2];
}

function parseStartCondition(input) {
    const [firstLine, secondLine] = input.split('\n');

    return [
        getPreLastCharacter(firstLine),
        parseInt(secondLine.match(/[0-9]+/)[0], 10)
    ];
}

function parseStateInstruction(input) {
    const lines = input.split('\n');

    function subParser(startIndex) {
        return [
            getPreLastCharacter(lines[startIndex]) == '1' ? 1 : 0,
            lines[startIndex + 1].endsWith('right.'),
            getPreLastCharacter(lines[startIndex + 2])
        ];
    }

    return [
        getPreLastCharacter(lines[0]),
        ...subParser(2),
        ...subParser(6)
    ];
}

function loadInput(input) {
    const [firstPart, ...states] = input.split('\n\n');
    const [startState, stepsNumber] = parseStartCondition(firstPart);

    const result = { startState, stepsNumber };

    return states
        .map(p => parseStateInstruction(p))
        .reduce((r, s) => { r[s[0]] = {
                0: [s[1], s[2], s[3]],
                1: [s[4], s[5], s[6]]
            }; return r; }, result);
}

function runDiagnostic(stateTable) {
    const tape = new Set();
    let state = stateTable.startState;
    let cursor = 0;

    for(let stepsNumber = stateTable.stepsNumber; stepsNumber > 0; stepsNumber--) {
        const [newValue, moveRight, newState] = stateTable[state][tape.has(cursor) ? 1 : 0];

        if (newValue == 1) {
            tape.add(cursor);
        } else {
            tape.delete(cursor);
        }

        if (moveRight) {
            cursor++;
        } else {
            cursor--;
        }

        state = newState;
    }

    return tape.size;
}

const testStateTable = loadInput(`Begin in state A.
Perform a diagnostic checksum after 6 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state B.

In state B:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.`);

unitTest(runDiagnostic(testStateTable), 3);

console.log('Solution for the task:', runDiagnostic(loadInput(loadInputFile('input.txt'))));
