# Challenge

You find the blueprints (your puzzle input) for an interesting machine on a tablet in a nearby pile of debris.
Looking at the machine's blueprints, you can start to identify its parts:

* A tape which contains 0 repeated infinitely to the left and right.
* A cursor, which can move left or right along the tape and read or write values at its current position.
* A set of states, each containing rules about what to do based on the current value under the cursor.

Each slot on the tape has two possible values: 0 (the starting value for all slots) and 1. Based on whether
the cursor is pointing at a 0 or a 1, the current state says what value to write at the current position of
the cursor, whether to move the cursor left or right one slot, and which state to use next.

For example, suppose you found the following blueprint:

```txt
Begin in state A.
Perform a diagnostic checksum after 6 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state B.

In state B:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.
```

Running it until the number of steps required to take the listed diagnostic checksum would result in the
following tape configurations (with the cursor marked in square brackets):

```txt
... 0  0  0 [0] 0  0 ... (before any steps; about to run state A)
... 0  0  0  1 [0] 0 ... (after 1 step;     about to run state B)
... 0  0  0 [1] 1  0 ... (after 2 steps;    about to run state A)
... 0  0 [0] 0  1  0 ... (after 3 steps;    about to run state B)
... 0 [0] 1  0  1  0 ... (after 4 steps;    about to run state A)
... 0  1 [1] 0  1  0 ... (after 5 steps;    about to run state B)
... 0  1  1 [0] 1  0 ... (after 6 steps;    about to run state A)
```

Once the specified number of steps have been executed, the machine should pause; once it does, count the number
of times 1 appears on the tape. In the above example, the diagnostic checksum is 3.

Create the machine in the blueprints (your puzzle input) and compute the diagnostic checksum it produces once
it's working?

## Flag

You may enter the diagnostic checksum as the flag or the Md5 hash of an output file containing the diagnostic
checksum followed by a newline.
