/*
Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.
For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7.
pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!
*/

function pairwise(arr, arg) {
  var index = [];
  for(a in arr){
    for(i=1;i<arr.length;i++){
      if(arr[a]+arr[i] === arg &&  i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1){
        index.push(+a,+i);
      }
    }
  }
  if (index.length >= 1) {
    return index.reduce(function(a, b){
      return a + b;
    });
  } else {
    return 0;
  }
}

pairwise([1,4,2,3,0,5], 7);
