# GraphQL challenge Part Two: Planets Query
With the schema and dataset from the first GraphQL implement the resolution of the queries 

This challenge will check your results from a query on planets

```
{planets{name rotationPeriod} }
```

# Calculating the flag
Using the language of your choice implement the resolution of the Schema.

Get the results from the GraphQL 
convert the results to minified JSON (No new lines, no spaces in separators) 
DO NOT include the 'data:' element convert the value of the data key to JSON

```
{"planets":[{ ... }]}
```

Calculate an md5 value for the JSON

## Whitespace note
Some JSON implementations have extra spaces e.g. Python

You should make sure the md5 key is calculated without these extra spaces.

```
result = schema.execute(q)
j = json.dumps(result.data, separators=(',', ':'))
```