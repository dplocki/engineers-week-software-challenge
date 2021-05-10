# Clock Confusion

Your boss is a bit of a nerd. Check that – he’s a HUGE nerd. When he sends out team meeting times, he might say something like *the meeting starts at 20 after 8*, which seems normal, but other times he’ll say things like *90 after 8* or *126 till 4*, which gives you pause. When you ask him about this, he says that *20 after 8* means the first time after 8 that the hour and minute hands of the clock make an angle of 20 degrees; *126 till 4* means the closest time before 4 that the hands make an angle of 126 degrees. As your boss walks away snickering, you resolve that you will write a program that will automatically convert his meeting times to more normal, non-nerdy times. That’ll show him!

## Input

The input file starts with an integer `n` indicating the number of test cases. Each test case consists of a single line of the form `a after b` or `a till b`, where a and b are integers satisfying 0 ≤ a < 360, and 1 ≤ b ≤ 12. All angles are measured starting at the hour hand and moving clockwise until reaching the minute hand (so, for example, at 9 o’clock the hands make an angle of 90 degrees and at 3 o’clock they make an angle of 270 degrees).

## Output

For each test case, output the time in the format h:m:s, where h, m and s are the hour, minutes and seconds closest to the given angle and hour and 1 ≤ h ≤ 12. Always use two digits to represent the number of minutes and seconds.

## Example

### Sample Input

```txt
4
20 after 8
126 til 4
180 til 1
0 after 12
```

### Sample Output

```txt
8:47:16
3:39:16
12:32:44
1:05:27
```
