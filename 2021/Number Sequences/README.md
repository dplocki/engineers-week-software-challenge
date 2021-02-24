# Challenge
Review sequences of digits (your puzzle input) and find the sum of all digits that match the next digit in the list. Treat the list as circular, with the first digit as the digit after the last digit in the list.

For example:

```
1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
1111 produces 4 because each digit (all 1) matches the next.
1234 produces 0 because no digit matches the next.
91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
```

## Flag

The input file contains multiple lines of digit sequences. For each line, you should output the sum of all digits that match the next digit in the list.

Once you have the output file, compute the Md5 hash for the file and enter the hash as the challenge flag.