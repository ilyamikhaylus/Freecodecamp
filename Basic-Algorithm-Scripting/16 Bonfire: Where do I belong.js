/*
Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).
For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).

Here are some helpful links:
Array.sort()
*/

function where(arr, num) {
  arr.sort();
  for (var a in arr){if (arr[a] >= num) return parseInt(a);}
  return arr.length;
  }

where([40, 60], 50);
