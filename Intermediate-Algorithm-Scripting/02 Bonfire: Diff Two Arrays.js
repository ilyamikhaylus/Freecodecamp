/*
Compare two arrays and return a new array with any items not found in both of the original arrays.

Here are some helpful links:
Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()
*/

function diff(arr1, arr2) {
  return arr1.concat(arr2).filter(function(item) { 
    return !(arr1.indexOf(item) >= 0 && arr2.indexOf(item) >= 0);
  });
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
