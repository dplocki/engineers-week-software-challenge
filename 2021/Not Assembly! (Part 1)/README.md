# Challenge

There seems to be a problem with a CPU coprocessor. The code it's running seems to be a variant of a kind you have seen before. The general functionality seems very similar, but some of the instructions are different:

* set X Y sets register X to the value of Y.
* sub X Y decreases register X by the value of Y.
* mul X Y sets register X to the result of multiplying the value contained in register X by the value of Y.
* jnz X Y jumps with an offset of the value of Y, but only if the value of X is not zero. (An offset of 2 skips the next instruction, an offset of -1 jumps to the previous instruction, and so on.)

Only the instructions listed above are used. The eight registers here, named 'a' through 'h', all start at 0.

If you run the program (your puzzle input), how many times is the mul instruction invoked?

## Flag

You may enter the number of times that the mul instruction is invoked as the flag or the Md5 hash of an output file containing the number followed by a newline.
