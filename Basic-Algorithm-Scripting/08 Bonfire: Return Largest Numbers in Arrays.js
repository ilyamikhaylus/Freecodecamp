/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

Here are some helpful links:
Comparison Operators
*/

function largestOfFour(arr) {
  var maxArr = [],
      max = 0;
  for (var i in arr){
    max = 0;
    for(var j in arr[i]){
      if(max < arr[i][j]){
        max = arr[i][j];
      }
    }
    maxArr[i]=max;
  } 
  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
