/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  var newArr = [];
  var number = 0;
  arr.sort();
  for(var i = arr[0];i<=arr[1];i++){
    newArr.push(i);
  }
  
  function LCM(A)
  {   
      var n = A.length, a = Math.abs(A[0]);
      for (var i = 1; i < n; i++){ 
        var b = Math.abs(A[i]), c = a;
        while (a && b){ a > b ? a %= b : b %= a; } 
        a = Math.abs(c*A[i])/(a+b);
      }
      return a;
  }
  return LCM(newArr);
}


smallestCommons([13,1]);
