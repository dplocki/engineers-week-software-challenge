# Using MD5 hash to capture the flag
The software challenges will have you produce formatted text output. Each challenge will describe the desired output.

To validate some challenge solutions, you will compute the MD5 hash of your output file and enter the hash as the challenge flag.

We will accept case-insensitive MD5 hashes from UTF-8 files with either LF or CRLF line endings.

This challenge is to help you get started by producing the expected output using the methods expected for all of the challenges.

Note: All challenge input files use UTF-8 encoding.

# The challenge
This challenge will have you process an input file as lines of text. You are to generate the length of each line.

## Example input and output displaying new lines
A good first step is this 'Hello, world' version.
Try to get your code to generate the proper output and MD5 flag value.

Input:
```
Hello, world\n
This tests the line lengths\n
of multiple lines\n
```
Expected output (if using LF line endings)
```
12\n
27\n
17\n
```

Expected output (if using CRLF line endings)
```
12\r\n
27\r\n
17\r\n
```

Expected MD5 value
```
LF: fbdd4c7c05d0baf5b247a9c55352f3b5
CRLF: 7c4a2b41639a0c790e83526709813d7d
```

### Additional Notes

* Lines that appear blank should be counted as lines of length 0 and your output should contain '0\n' or '0\r\n'.
* The new line character(s) '\r' or '\n' should not be counted in the length of the line

## Capturing the challenge flag
Once you are generating a proper MD5 flag for the hello, world example. Use the attached input file to generate the final MD5 flag for this challenge. Enter the flag to finish the challenge.

