const { unitTest } = require("../../utils/common");

function buildVortexInsert(input) {
    const vortex = { 0: 0 };
    let currentPosition = 0;

    return {
        vortex: vortex,
        insert: (value) => {
            for(let step = input; step >= 0; step--) {
                currentPosition = vortex[currentPosition];
            }

            vortex[value] = vortex[currentPosition];
            vortex[currentPosition] = value;
        },
        print: () => {
            const result = [];
            let current = 0;

            do {
                result.push(current);
                current = vortex[current];
            } while(current !== 0)

            return result.join(' ');
        }
    }
}

function getTheElementAfter2021(input) {
    const vortex = buildVortexInsert(input);
    for(let i = 1; i <= 2021; i++) {
        vortex.insert(i);
    }

    return vortex.vortex[2021];
}

unitTest(getTheElementAfter2021(3), 11);

console.log('Solution:', getTheElementAfter2021(376));
