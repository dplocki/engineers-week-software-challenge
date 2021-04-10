const { loadInputFile, toLines } = require("../../utils/common");

const ROW = 0;
const COLUMN = 1;

const maze = toLines(loadInputFile('maze.txt'));
const mazeWidth = maze[ROW].length;

const getValueOnPosition = (row, column) => parseInt(maze[row][column], 10);
const getNeighbors = (row, column) => {
    const result = [];

    if (maze[row - 1][column] === ' ') {
        result.push([row - 2, column]);
    }

    if (maze[row + 1][column] === ' ') {
        result.push([row + 2, column]);
    }

    if (maze[row][column - 2] === ' ') {
        result.push([row, column - 4]);
    }

    if (maze[row][column + 2] === ' ') {
        result.push([row, column + 4]);
    }

    return result;
};

const getValueOfPath = () => {
    const startPoint = [1, 2];
    const possibilities = [ [startPoint, getNeighbors(...startPoint)[0], getValueOnPosition(...startPoint)] ];
    
    while (possibilities.length > 0) {
        const [point, previousPoint, value] = possibilities.pop();
         if (point[COLUMN] > mazeWidth) {
            return value;
        }

        const newValue = value + getValueOnPosition(...point);

        for(newPoint of getNeighbors(...point)) {
            if (newPoint[ROW] == previousPoint[ROW] && newPoint[COLUMN] == previousPoint[COLUMN]) {
                continue;
            }

            possibilities.push([newPoint, point, newValue]);
        }
    }

    throw new Error('Path not found');
};

console.log('Solution:', getValueOfPath());
