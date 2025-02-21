# Crack the Combination Lock

A dev struggles to remember his banking pin, so he creates a combination lock app to protect it.

The combination lock requires the correct sequence of 4 lower case letters to unlock.

To make the combination easier to remember he makes two of the letters the same.

However, now he has forgotten the combination of the lock as well. Help him to crack the combination lock and retrieve his pin.

To enter a combination simply run the attached combination_lock executable with each letter of the combination as an argument.

For example, to try the combination "e g k b", run the following:

combination_lock.exe --c1 e --c2 g --c3 k --c4 b

If the combination is incorrect "ACCESS DENIED" is printed to stdout, but if it is correct the banking pin is printed to stdout.

Provide the MD5 hash of the banking pin as your answer.
