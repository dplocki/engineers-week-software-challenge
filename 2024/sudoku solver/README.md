# Problem Statement

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

* Each of the digits 1-9 must occur exactly once in each row.
* Each of the digits 1-9 must occur exactly once in each column.
* Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
* The '.' character indicates empty cells.

## Inputs

```
Input: board = [["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]
```

## Explanation 

The input board is shown above and the only valid solution is shown below:

## Output

output should contain the same input board with `.` replaced by a number.  Each row ends with a comma (`,`). No need to add a new line for each row.

Submit answer in this format (no new line is required for each row)

```
[[“1”,”2”,”3”,”4”,”5”,”6”,”7”,”8”,”9”],[“9”,”8”,”7”,”6”,”5”,”4”,”3”,”2”,”1”],[“7”,
```

## Constraints

```
board.length == 9
board[i].length == 9
board[i][j] is a digit or '.'.
```

It is guaranteed that the input board has only one solution.

See `sudoko.jpeg` for better understanding of input.
