/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.

Here are some helpful links:
Arguments object
Array.reduce()
*/

function unite() {
var finalArr = arguments[0];
for (var i in arguments) {
  for (var j in arguments[i])
    if (finalArr.indexOf(arguments[i][j])== -1) {
      finalArr.push(arguments[i][j]);
    }
}
return finalArr;
}
 
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
