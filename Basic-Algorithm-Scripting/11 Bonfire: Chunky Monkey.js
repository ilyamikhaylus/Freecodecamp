/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Here are some helpful links:
Array.push()
*/

function chunk(arr, size) {
  var result = [];
  while (arr.length > size) {result.push(arr.splice(0, size))}
  if (arr.length) result.push(arr);
  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);
