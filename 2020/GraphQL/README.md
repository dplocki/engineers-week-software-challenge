# GraphQL challenge Part One: Write a Schema
This challenge has you create a GraphQL schema definition for a set of data.

The data set is attached: planets.json and satellites.json

## What is GraphQL
GraphQL is a query language for your APIs. It has wide industry support in multiple programming languages and server technologies. Github, MongoDB, Facebook, Airbnb, twitter are among the companies moving to GraphQL APIs.

## Get started
If you're new to GraphQL you can look into getting started on their [website](https://graphql.org/learn/)

# The Challenge
Write a schema for the dataset attached.

The Schema should have:
- Three types: Query, Planet, and Satellite (In that order)
- Types should use the key names from the data set
- You should place types for these keys e.g. name:String!
- Query should have 4 entry points (in this order)
  - planets returning all the planets
  - planet with an id argument returning a planet
  - satellites all satellites for a planet with a planet argument for the planet id
  - satellite with an id argument returning a satellite
- The schema should NOT expose the planetId of a satellite
- Examine the data to determine which fields allow NULL return values and assume other do not allow NULL
- The last field in the Planet should be a 'satellites' method returning its satellites
- The last field in Satellite should be to return its planet

# Capturing the flag
To capture the flag you convert your schema to an MD5 checksum value.

To get the proper flag assure you have checked these things:

- You named things as specified above
- You have the correct NULL and non-NULL 
  - This could be the difference of Float vs. FLoat!
  - Check arrays or values that may return empty results (hint: Mercury, Venus)
- You minimize whitespace as described below

## Regarding formating and minimizing whitespace
You can write your schema in any editor or fashion you desire. However, to calculate the flag, you will need to transform the schema into a minimal form of the schema syntax. This is basically removing all unnecessary whitespace.

```
type Point {
    X   : Int   !
    Y: Int! 
} 
 
    
type    Query    {    
    points : [   Point !  ]!
}
```

Should be
```
type Point{X:Int!Y:Int!}type Query{points:[Point!]!}
```
Note the only whitespace is between the word type and the type Name. 
No newlines, no tab only single spaces. The end of file is NOT a new line.

With a hash of
```
5823728f29d986f1e5c73e826ac3368b
```


## A Note about GraphQL and Rockwell Automation
GraphQL is an import technology moving forward, many software components with Rockwell Automation are migrating to leverage GraphQL. These include Project RAIDER and several components from Common Architecture and Technology.

This challenge was added to help bring awareness to this technology.

Version 2.0 of the [Common Gateway Platform](http://cat.web.ra-int.com/common-gateway/) adds a new streamlined payload for allowing Request Response style queries as well as subscriptions.

The query mechanism allows people to migrate ReST, GraphQL, JsonRPC and other formats to be first class protocols on the Common Gateway Platform. The Gateway can then route these request seamlessly across various transports: WebSockets, 0MQ, NodeIPC and other transports.
