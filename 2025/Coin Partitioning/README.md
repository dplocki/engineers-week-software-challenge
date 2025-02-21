# Coin Partitioning

Let `p(n)` represent the number of different ways in which `n` coins can be
separated into piles. For example, five coins can be separated into piles in
exactly seven different ways, so `p(5) = 7`.

```text
OOOOO
OOOO   O
OOO   OO
OOO   O   O
OO   OO   O
OO   O   O   O
O   O   O   O   O
```

Find the least value of `n` for which `p(n)` is divisible by 1903 (the year
Rockwell Automation was founded).

Add `n` to `p(n)` and take the MD5 hash of `n + p(n)` in string form.
