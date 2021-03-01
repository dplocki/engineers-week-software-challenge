# GraphQL challenge Part Two: Planets Query
With the schema and dataset from the first GraphQL implement the resolution of the queries 

This challenge will check your results from a query on satellites

```
 {
        mars: satellites(planet: 4) {name magnitude} 
        albert: satellites(planet: 5) {name radius albedo}
        saturn: satellites(planet: 8) {name density albedo}
}
```

# Calculating the flag
Using the language of your choice implement the resolution of the Schema.

Get the results from the GraphQL 
convert the results to minified JSON (No new lines, no spaces in separators) 
DO NOT include the 'data:' element convert the value of the data key to JSON

```
{"mars":[{"name": ... }
```



Calculate an md5 value for the JSON

## Whitespace note
Some JSON implementations have extra spaces e.g. Python

You should make sure the md5 key is calculated without these extra spaces.

```
result = schema.execute(q)
j = json.dumps(result.data, separators=(',', ':'))
```