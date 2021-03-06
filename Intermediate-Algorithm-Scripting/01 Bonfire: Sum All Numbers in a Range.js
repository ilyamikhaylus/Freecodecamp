/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.

Here are some helpful links:
Math.max()
Math.min()
Array.reduce()
*/

function sumAll(arr) {
  var maxNum = Math.max.apply(null, arr);
  var minNum = Math.min.apply(null, arr);
  var sum = 0;
  for(var i = minNum;i<=maxNum;i++){
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
