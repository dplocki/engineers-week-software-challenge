const { unitTest, loadInputFile } = require("../common");

function buildMap(input) {
    const lines = input.split('\n');
    const result = {};

    for(const row in lines) {
        result[row] = {};

        for(const column in lines[row]) {
            if (lines[row][column] !== ' ') {
                result[row][column] = lines[row][column];
            }
        }
    }

    return result;
}

const directions = {
    SOUTH: 0,
    WEST: 1,
    NORTH: 2,
    EAST: 3
};

function isTilePath(map, y, x) {
    const wholeRow = map[y] || {};
    const character = wholeRow[x] || null;

    return !!character;
}

function rotate(map, currentDirection, row, column) {
    if (isTilePath(map, row - 1, column) && currentDirection !== directions.SOUTH) {
        return directions.NORTH;
    }

    if (isTilePath(map, row + 1, column) && currentDirection !== directions.NORTH) {
        return directions.SOUTH;
    }

    if (isTilePath(map, row, column - 1) && currentDirection !== directions.EAST) {
        return directions.WEST;
    }

    if (isTilePath(map, row, column + 1) && currentDirection !== directions.WEST) {
        return directions.EAST;
    }

    throw new Error('Unknow direction on path');
}

function followPath(map) {
    let row = 0;
    let column = parseInt(Object.keys(map[0])[0], 10);
    let direction = directions.SOUTH;
    let result = '';

    while(column !== 0) {
        const current = map[row][column];

        if (/^[A-Z]$/.test(current)) {
            result += current;
        } else if (current === '+') {
            direction = rotate(map, direction, row, column);
        } else if (!current) {
            throw new Error('Out of path!');
        }

        if (direction === directions.NORTH) {
            row--;
        } else if (direction === directions.SOUTH) {
            row++;
        } else if (direction === directions.WEST) {
            column--;
        } else if (direction === directions.EAST) {
            column++;
        } else {
            throw new Error('Unknown direction');
        }
    }

    return result;
}

const testInput = `     |          
     |  +--+    
     A  |  C    
 F---|----E|--+ 
     |  |  |  D 
     +B-+  +--+ 
`;

unitTest(
    followPath(buildMap(testInput)),
    'ABCDEF');

console.log(followPath(buildMap(loadInputFile('input.txt'))));
