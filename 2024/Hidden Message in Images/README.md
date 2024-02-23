# Problem Statement

A hidden message is encoded between two images. The hidden message will reveal the solution string
to this problem that will need to be hashed and submitted.

## Decoding rules

### Words Per Row

Each row in the image will contain a single word. Words will not span multiple lines.

Once the left-most word is found in a row, the rest of the row is ignored.

### Locating Words

Each hidden word in a row is both preceded and followed by a pixel that is the same color in that
location in both images.

Suppose pixel color is represented by characters, then in the following example
a word would be hidden in the pixels represented by `ABCD` and `WXYZ` in the left and
right rows, respectively (since they are surrounded by `0` and `1` in the same pixel locations for both rows):

| Left image row | Right image row |
| -------------- | --------------- |
| abcd0ABCD1wxyz | efgh0WXYZ1qrst  |

### Decoding Letters in a Word
        
To decode the letters in each word, you will need the rgb color values for the pixel in that location
in both images. Once you have these values, find the corresponding letter following these rules:

  * If the red and green values are the same for both pixels, the letter is lowercase. Otherwise, it is uppercase.
  * The blue values of pixels from each image encode the letter information. Take the absolute value of
    the difference in blue values modulo 26 [i.e., abs(b_1 - b_2) % 26] and use the result to find the letter in
    the lookup table below. Make sure to respect the capitalization information from the red and green values.

### Blue-value Result Lookup Table

| calculation result | character |
| ------------------ | --------- |
|                  0 |         n |
|                  1 |         m |
|                  2 |         a |
|                  3 |         l |
|                  4 |         c |
|                  5 |         b |
|                  6 |         j |
|                  7 |         k |
|                  8 |         i |
|                  9 |         d |
|                 10 |         e |
|                 11 |         f |
|                 12 |         h |
|                 13 |         o |
|                 14 |         q |
|                 15 |         g |
|                 16 |         r |
|                 17 |         p |
|                 18 |         w |
|                 19 |         v |
|                 20 |         u |
|                 21 |         t |
|                 22 |         z |
|                 23 |         s |
|                 24 |         y |
|                 25 |         x |

## Finding the Solution

When the hidden message is decoded properly, you should have enough information to find and submit the answer to
this puzzle.

## Inputs

The input images for the problem are `left.bmp` and `right.bmp`. The hidden message will instruct you how to find
the output string.

Smaller example images also exist in `hello_world_left.bmp` and `hello_world_right.bmp`. The message
encoded in these images is `Hello` on the first line and `World` on the second line. These images are small enough that you could examine them by hand before getting started with code.

## Questions

If you have questions about this problem, feel free to reach out to Matt Sargent at `matthew.sargent@rockwellautomation.com`.
