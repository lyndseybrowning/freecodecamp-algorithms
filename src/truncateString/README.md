# Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Example:

```javascript
truncateString('A-tisket a-tasket A green and yellow basket', 11) // => A-ticket...
truncateString('Peter Piper picked a peck of pickled peppers', 14); // => Peter Piper...
```

[Open challenge URL](https://www.freecodecamp.com/challenges/truncate-a-string)
