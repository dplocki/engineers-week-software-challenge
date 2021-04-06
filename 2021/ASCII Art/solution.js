const { loadInputFile, toLines } = require("../common");

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

                    yield result;
                }
            }
        }
    };
}

const mappings = toLines(loadInputFile('input.txt'))
    .map(l => l.split(' => ').map(s => s.replace(/\//g, '')))
    .reduce((result, l) => {
        const [key, value] = l;
        const size = (key.length === 4) ? 2 : 3;
        let image = key;

        for(let i = 0; i < 4; i++) {
            result[image] = value;
            image = rotate90(image, size);
        }

        image = vertical(key);
        for(let i = 0; i < 4; i++) {
            result[image] = value;
            image = rotate90(image, size);
        }

        return result;
    }, {});

const baseImageWrapper = image([
    '.#.',
    '..#',
    '###'
]);

console.log(Array.from(baseImageWrapper.getSubPicture(3)));
// for(let step = 0; step < 18; step++) {
//     if (s.isDiv2()) {

//     } else {

//     }
// }
