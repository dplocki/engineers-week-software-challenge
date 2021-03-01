const { graphql, buildSchema } = require('graphql')
const { addResolveFunctionsToSchema } = require('graphql-tools')
const fs = require('fs').promises
const path = require('path')
const crypto = require('crypto')

const planets = require('../planets.json')
const satellites = require('../satellites.json')

async function doQuery(schema, q, name) {
    let results = await graphql(schema, q)
    let j = JSON.stringify(results.data)
    console.log(j)

    let hash = crypto.createHash('md5').update(j).digest("hex")
    console.log("query", q)
    console.log("hash: ", hash)
    await fs.writeFile(path.resolve(__dirname, name+'js.json'), j)
    await fs.writeFile(path.resolve(__dirname, name+'js.md5'), hash)
}

const resolvers = {
    Query: {
        async planets(obj, args, context, info) {
            return planets
        },
        async planet(obj, args, context, info) {
            for (let i = 0, l = planets.length; i < l; i++) {
                if (planets[i].id.toString() === args.id) {
                    return planets[i]
                }
            }
            return null
        },
        async satellites(obj, args, context, info) {
            let ret = []
            for (let i = 0, l = satellites.length; i < l; i++) {
                if (satellites[i].planetId.toString() === args.planet) {
                    ret.push(satellites[i])
                }
            }
            return ret
        },
        async satellite(obj, args, context, info) {
            for (let i = 0, l = satellites.length; i < l; i++) {
                if (satellites[i].id.toString() === args.id) {
                    return satellites[i]
                }
            }
            return null
        }
    },
    Planet: {
        async satellites(obj, args, context, info) {
            let ret = []
            for (let i = 0, l = satellites.length; i < l; i++) {
                if (satellites[i].planetId === obj.id) {
                    ret.push(satellites[i])
                }
            }
            return ret
        }
    },
    Satellite: {
        async planet(obj, args, context, info) {
            for (let i = 0, l = planets.length; i < l; i++) {
                if (planets[i].id === obj.planetId) {
                    return planets[i]
                }
            }
            return null
        }
    }

}

async function main() {
    let raw = await fs.readFile(path.resolve(__dirname, '..', 'schema.graphql'), 'utf8')
    // replace all whitespace with a single space
    let trim = raw.replace(/\s\s+/g, " ")
    // remove any unnecessary spaces
    let compress = trim.replace(/\s?([\!|\[|\]|}|{|:]\s?)/g, (a, b, c, d) => {
        if (a) return a.trim();
        else if (d) return d;
    })
    let hash = crypto.createHash('md5').update(compress).digest("hex")
    await fs.writeFile("flag", hash)
    console.log("schema flag: ", hash)
    let schema = buildSchema(compress)
    // Do Query flag
    schema = addResolveFunctionsToSchema({ schema, resolvers });
    // DO calculate mass flag
    await doQuery(schema, '{planets{name rotationPeriod} }', 'q1')
    await doQuery(schema, `{ 
        mars:planet(id: 4) {name gravity distanceFromSun satellites{name density}}
        earth:planet(id: 3) {name gravity mass satellites{name magnitude}} }
    `, 'q2')
    await doQuery(schema, `
    {
        mars: satellites(planet: 4) {name magnitude} 
        albert: satellites(planet: 5) {name radius albedo}
        saturn: satellites(planet: 8) {name density albedo}
}`, 'q3'),
    await doQuery(schema, `
    {
        fred: satellite(id: 146) {name magnitude planet {name numberOfMoons }} 
        barney: satellite(id: 88) {name radius albedo planet {name gravity }}
        wilma: satellite(id: 176) {name density albedo planet {name meanTemperature }}
    }`, 'q4')
}
main()

let c1 = `type Point {
    X   : Int   !
    Y: Int! 
} 
 
    
type    Query    {    
    points : [   Point !  ]!
}`

let trim = c1.replace(/\s\s+/g, " ")
// remove any unnecessary spaces
let compress = trim.replace(/\s?([\!|\[|\]|}|{|:]\s?)/g, (a, b, c, d) => {
    if (a) return a.trim();
    else if (d) return d;
})
let schema = buildSchema(compress)
console.log(compress)
let hash = crypto.createHash('md5').update(compress).digest("hex")
console.log(hash)