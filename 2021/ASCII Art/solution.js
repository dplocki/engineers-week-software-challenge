const { loadInputFile, toLines } = require("../../utils/common");

function rotate90(original, size) {
    let result = Array.from(original);

    for(const index in result) {
        const x_n = size - Math.floor(index / size) - 1;
        const y_n = index % size;

        result[y_n * size + x_n] = original[index];
    }

    return result.join('');
}

function vertical(original, size) {
    let result = Array.from(original);

    for(const index in result) {
        const x_n = index % size;
        const y_n = size - Math.floor(index / size) - 1;

        result[y_n * size + x_n] = original[index];
    }

    return result.join('');
}

function image(baseImage) {
    const result = baseImage;

    const getWholeSize = () => result[0].length;
    const getValue = (x, y) => result[y][x];

    return {
        isDiv2: () => getWholeSize() % 2 === 0,
        getSubPicture: function* (size) {
            const subPicturesInRow = getWholeSize() / size;

            for(let row = 0; row < subPicturesInRow; row++) {
                for(let column = 0; column < subPicturesInRow; column++) {
                    const result = [];
                    for(let y = 0; y < size; y++) {
                        let tmp = '';
                        for(let x = 0; x < size; x++) {
                            tmp += getValue(column * size + x, row * size + y);
                        }

                        result.push(tmp);
                    }

                    yield [row, column, result];
                }
            }
        },
        getSingleLine: () => result.join('')
    };
}

function buildNewPicture(baseImageWrapper, sizeOfSubPicture) {
    const newPicture = [];

    for(const [row, column, subPicture] of baseImageWrapper.getSubPicture(sizeOfSubPicture)) {
        const newSubPicture = mappings[subPicture.join('')].split('/');
        const newSubPictureSize = newSubPicture.length;

        for(let i = 0; i < newSubPictureSize; i++) {
            if (column === 0) {
                newPicture.push('');
            }

            newPicture[row * newSubPictureSize + i] += newSubPicture[i];
        }
    }

    return newPicture;
} 

const mappings = toLines(loadInputFile('input.txt'))
    .map(l => l.split(' => '))
    .map(l => [l[0].replace(/\//g, ''), l[1]])
    .reduce((result, l) => {
        const rotateCount = 4;
        const [key, value] = l;
        const size = (key.length === 4) ? 2 : 3;
        let image = key;

        for(let i = 0; i < rotateCount; i++) {
            result[image] = value;
            image = rotate90(image, size);
        }

        image = vertical(key, size);
        for(let i = 0; i < rotateCount; i++) {
            result[image] = value;
            image = rotate90(image, size);
        }

        return result;
    }, {});

let baseImageWrapper = image([
    '.#.',
    '..#',
    '###'
]);

for(let step = 0; step < 18; step++) {
    baseImageWrapper = image(buildNewPicture(baseImageWrapper, baseImageWrapper.isDiv2() ? 2 : 3));
}

console.log('Solution is:', baseImageWrapper.getSingleLine().replace(/[^#]/g, '').length);
