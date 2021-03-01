import graphene
import json
import os
import sys
import hashlib

pf = os.path.join(sys.path[0],'..', 'planets.json')
with open(pf) as f:
  planets = json.load(f)


pf = os.path.join(sys.path[0],'..', 'satellites.json')
with open(pf) as f:
  satellites = json.load(f)

class Planet(graphene.ObjectType):
  id = graphene.ID(required=True)
  name = graphene.String(required= True)
  mass=graphene.Float(required=True)
  diameter=graphene.Float(required=True)
  density=graphene.Float(required=True)
  gravity=graphene.Float(required=True)
  escapeVelocity=graphene.Float(required=True)
  rotationPeriod=graphene.Float(required=True)
  lengthOfDay=graphene.Float(required=True)
  distanceFromSun=graphene.Float(required=True)
  perihelion=graphene.Float(required=True)
  aphelion=graphene.Float(required=True)
  orbitalPeriod=graphene.Float(required=True)
  orbitalVelocity=graphene.Float(required=True)
  orbitalInclination=graphene.Float(required=True)
  orbitalEccentricity=graphene.Float(required=True)
  obliquityToOrbit=graphene.Float(required=True)
  meanTemperature=graphene.Float(required=True)
  surfacePressure=graphene.Float(required=True)
  numberOfMoons=graphene.Int(required=True)
  hasRingSystem=graphene.Boolean(required=True)
  hasGlobalMagneticField=graphene.Boolean(required=True)
  satellites=graphene.List(graphene.NonNull(lambda: Satellite))

  def resolve_satellites(self, info):
    ret = []
    for sat in satellites:
      if sat['planetId'] == self['id']:
        ret.append(sat)
    return ret

class Satellite(graphene.ObjectType):
  id = graphene.ID(required=True)
  name = graphene.String(required=True)
  gm = graphene.Float(required=True)
  radius = graphene.Float(required=True)
  density = graphene.Float(required=True)
  magnitude = graphene.Float(required=True)
  albedo = graphene.Float(required=True)
  planet = graphene.NonNull(Planet)

  def resolve_planet(self, info):
    for planet in planets:
      if planet['id'] == self['planetId']:
        return planet
    return null

class Query(graphene.ObjectType):
  planets = graphene.NonNull(graphene.List(Planet, required=True))
  planet = graphene.NonNull(Planet, id=graphene.ID())
  satellites = graphene.NonNull(graphene.List(Satellite, required=True), planet=graphene.ID())
  satellite = graphene.NonNull(Satellite, id=graphene.ID())

  def resolve_planets(self, info):
    return planets

  def resolve_planet(self, info, id):
    for planet in planets:
      if str(planet['id']) == id:
        return planet
    return null

  def resolve_satellites(self, info, planet):
    ret = []
    for sat in satellites:
      if str(sat['planetId']) == planet:
        ret.append(sat)
    return ret

  def resolve_satellite(self, info, id):
    for sat in satellites:
      if str(sat['id']) == id:
        return sat
    return null

schema = graphene.Schema(query=Query)
def doQuery(name, q):
  result = schema.execute(q)
  j = json.dumps(result.data, separators=(',', ':'))
  md5 = hashlib.md5(j.encode('utf-8')) 
  hash = md5.hexdigest()
  print('Results:' +j)
  print('hash:' +hash)
  
  pf = os.path.join(sys.path[0], name+'.json')
  with open(pf,"w") as f:
    f.write(j) 
  pf = os.path.join(sys.path[0], name+'.md5')
  with open(pf,"w") as f:
    f.write(hash) 

doQuery('q1py','{planets{name rotationPeriod} }')
doQuery('q2py','{ mars:planet(id: 4) {name gravity distanceFromSun satellites{name density}} earth:planet(id: 3) {name gravity mass satellites{name magnitude}} }')
doQuery('q3py', '''
  {
        mars: satellites(planet: 4) {name magnitude} 
        albert: satellites(planet: 5) {name radius albedo}
        saturn: satellites(planet: 8) {name density albedo}
}'''
)
doQuery('q4py', '''
  {
        fred: satellite(id: 146) {name magnitude planet {name numberOfMoons }} 
        barney: satellite(id: 88) {name radius albedo planet {name gravity }}
        wilma: satellite(id: 176) {name density albedo planet {name meanTemperature }}
}'''
)