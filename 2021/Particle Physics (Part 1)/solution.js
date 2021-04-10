const { loadInputFile, toLines } = require("../../utils/common");

const LONG_RUN = 1024;
const pattern = /^p=\<(-?\d+),(-?\d+),(-?\d+)\>, v=\<(-?\d+),(-?\d+),(-?\d+)\>, a=\<(-?\d+),(-?\d+),(-?\d+)\>$/;
const particles = toLines(loadInputFile('input.txt'))
    .map(line => line.match(pattern))
    .map((group, index) => ({
        index: index,
        positionX: parseInt(group[1], 10),
        positionY: parseInt(group[2], 10),
        positionZ: parseInt(group[3], 10),

        velocityX: parseInt(group[4], 10),
        velocityY: parseInt(group[5], 10),
        velocityZ: parseInt(group[6], 10),

        accelerationX: parseInt(group[7], 10),
        accelerationY: parseInt(group[8], 10),
        accelerationZ: parseInt(group[9], 10)
    }));

for(let i = 0; i < LONG_RUN; i++) {
    for(const particle of particles) {
        particle.velocityX += particle.accelerationX;
        particle.positionX += particle.velocityX;

        particle.velocityY += particle.accelerationY;
        particle.positionY += particle.velocityY;

        particle.velocityZ += particle.accelerationZ;
        particle.positionZ += particle.velocityZ;
    }
}

const theClosestParticle = particles
    .map(p => ({ index: p.index, distance: Math.abs(p.positionX) + Math.abs(p.positionY) + Math.abs(p.positionZ) }))
    .reduce((m, p) => (m.distance > p.distance) ? p : m);

console.log('Solution for the task:', theClosestParticle.index);
