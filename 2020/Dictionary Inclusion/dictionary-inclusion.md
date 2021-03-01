# Algorithms Challenge 2: Dictionary Inclusion

For this challenge, you will need to count the number of times words in the provided dictionary are included in other words in the provided dictionary.

## Example Dictionary:
* are
* bare
* barely
* be
* beware
* care
* clever

The answer for this dictionary is **6**

## Answer Breakdown:
* are    - 0 (no other words in this dictionary are included in 'are')
* bare   - 1 (includes 'are')
* barely - 2 (inludes 'bare' and 'are')
* be     - 0 (no other words in this dictionary are included in 'be')
* beware - 2 (includes 'be' and 'are')
* care   - 1 (includes 'are')
* clever - 0 (no other words in this dictionary are included in 'clever')

## Flag
To get the flag for this challenge, compute the md5 checksum from a file containing the numeric answer followed by a newline '\n'.

```
6\n
```

should be

```
9ae0ea9e3c9c6e1b9b6252c8395efdc1
```

## Answer and Flags
```
The answer for the words.txt dictionary is 4911453

Flags:
64f1a1958444ab3d9d949ff2417dfbc5 // UTF-8 LF
5c77f2d32e62cf7b8dab1cf5603d3069 // UTF-8 CRLF
```