# Algorithms Challenge 3: Natural Numbers

How many sequential natural numbers, starting at 1, must be added together to result in the first number that has at least N divisors?

## Example Input

You are provided with a trials.txt file containing lines specifying the number N of divisors desired. Your task is to output the number of sequential natural numbers, starting from 1, needed to be added together to reach the first number with at least N divisors.

For the trials input:

```txt
5
10
15
20
```

The expected output is:

```txt
7
15
15
32

```

## Output Explained

Looking for 5 divisors, the answer is 7 because 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28 which has at least 5 divisors (1, 2, 4, 7, 14, 28)

Looking for 10 divisors, the answer is 15 because 1 + 2 + 3 + ... + 14 + 15 = 120 which has more than 10 divisors

Looking for 15 divisors, the answer is 15 because 1 + 2 + 3 + ... + 14 + 15 = 120 which has more than 15 divisors

Looking for 20 divisors, the answer is 32 because 1 + 2 + 3 + ... + 31 + 32 = 528 which has more than 20 divisors

## Flag

The flag of this challenge is the md5 checksum of the output file ending in a newline.
The flag for the example above is:

```txt
ad16bbf8263b30537ffcffb6b9873b60
```

## Answer and Flags

```txt
Flags:
1cf0d582d6fb709d313e56a61b93af6e // UTF-8 LF
a9479a8dc0df51039fe563383ea5c8e7 // UTF-8 CRLF
```
