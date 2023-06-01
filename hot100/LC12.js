/**
12. Integer to Roman
1 <= num <= 3999

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */

// use array to create hash table
function intToRoman(num) {
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return (
    thousands[Math.floor(num / 1000)] +
    hundreds[Math.floor((num % 1000) / 100)] +
    tens[Math.floor((num % 100) / 10)] +
    ones[Math.floor(num % 10)]
  );
}

/**

1234

1000 M
200 CC
30 XXX
4 IV
0 - 9
 */
