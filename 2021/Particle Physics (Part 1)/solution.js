const { loadInputFile } = require('../common');

const LONG_RUN = 1024;
const pattern = /^p=\<(-?\d+),(-?\d+),(-?\d+)\>, v=\<(-?\d+),(-?\d+),(-?\d+)\>, a=\<(-?\d+),(-?\d+),(-?\d+)\>$/;
const particules = loadInputFile('input.txt')
    .split('\n')
    .map(line => line.match(pattern))
    .map((group, index) => ({
        index: index,
        positionX: parseInt(group[1]),
        positionY: parseInt(group[2]),
        positionZ: parseInt(group[3]),

        velocityX: parseInt(group[4]),
        velocityY: parseInt(group[5]),
        velocityZ: parseInt(group[6]),

        accelerationX: parseInt(group[7]),
        accelerationY: parseInt(group[8]),
        accelerationZ: parseInt(group[9])
  }));

for(let i = 0; i < LONG_RUN; i++) {
    for(const particule in particules) {
        particule.velocityX += particule.accelerationX;
        particule.velocityY += particule.accelerationY;
        particule.velocityZ += particule.accelerationZ;

        particule.positionX += particule.velocityX;
        particule.positionY += particule.velocityY;
        particule.positionZ += particule.velocityZ;
    }
}

const theClosestParticle = particules
    .map(p => ({ index: p.index, distance: Math.abs(p.positionX) + Math.abs(p.positionY) + Math.abs(p.positionZ) }))
    .reduce((m, p) => (m.distance > p.distance) ? m : p);

console.log(theClosestParticle.index);
