# Challenge

You find a program trying to generate some art. It uses a strange process that involves repeatedly enhancing the detail of an image through a set of rules.

The image consists of a two-dimensional square grid of pixels that are either on (#) or off (.). The program always begins with this pattern:

```txt
.#.
..#
###
```

Because the pattern is both 3 pixels wide and 3 pixels tall, it is said to have a size of 3.

Then, the program repeats the following process:

If the size is evenly divisible by 2, break the pixels up into 2x2 squares, and convert each 2x2 square into a 3x3 square by following the corresponding enhancement rule.
Otherwise, the size is evenly divisible by 3; break the pixels up into 3x3 squares, and convert each 3x3 square into a 4x4 square by following the corresponding enhancement rule.
Because each square of pixels is replaced by a larger one, the image gains pixels and so its size increases.

The artist's book of enhancement rules is nearby (your puzzle input); however, it seems to be missing rules. The artist explains that sometimes, one must rotate or flip the input pattern (multiple times) to find a match. (Never rotate or flip the output pattern, though.) Each pattern is written concisely: rows are listed as single units, ordered top-down, and separated by slashes. For example, the following rules correspond to the adjacent patterns:

```txt
../.#  =  ..
          .#

                .#.
.#./..#/###  =  ..#
                ###

                        #..#
#..#/..../#..#/.##.  =  ....
                        #..#
                        .##.
```

When searching for a rule to use, rotate and flip the pattern as necessary. For example, all of the following patterns match the same rule:

```txt
.#.   .#.   #..   ###
..#   #..   #.#   ..#
###   ###   ##.   .#.
```

Suppose the book contained the following two rules:

```txt
../.# => ##./#../...
.#./..#/### => #..#/..../..../#..#
```

As before, the program begins with this pattern:

```txt
.#.
..#
###
```

The size of the grid (3) is not divisible by 2, but it is divisible by 3. It divides evenly into a single square; the square matches the second rule, which produces:

```txt
#..#
....
....
#..#
```

The size of this enhanced grid (4) is evenly divisible by 2, so that rule is used. It divides evenly into four squares:

```txt
#.|.#
..|..
--+--
..|..
#.|.#
```

Each of these squares matches the same rule (../.# => ##./#../...), three of which require some flipping and rotation to line up with the rule. The output for the rule is the same in all four cases:

```txt
##.|##.
#..|#..
...|...
---+---
##.|##.
#..|#..
...|...
```

Finally, the squares are joined into a new grid:

```txt
##.##.
#..#..
......
##.##.
#..#..
......
```

Thus, after 2 iterations, the grid contains 12 pixels that are on.

## Flag

Using the rules in your puzzle input and the starting pattern, how many pixels stay on (#) after 18 iterations? Recall the starting pattern is:

```txt
.#.
..#
###
```

You may enter the number of "on" pixels as the flag or the Md5 hash of an output file containing the number followed by a newline.
