/*
Remove all falsy values from an array.
Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:
Boolean Objects
Array.filter()
*/

function bouncer(arr) {
  var newArray = [];
  for(var i in arr){
    if (arr[i]){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

bouncer([7, 'ate', '', false, 9, null]);
