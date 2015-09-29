/*
Return the length of the longest word in the provided sentence.
Your response should be a number.

Here are some helpful links:
String.split()
String.length
*/

function findLongestWord(str) {
  var array = str.split(" ");
  var maxstring = array[0];
  for (var i=1;i<array.length;i++){
    if (maxstring.length < array[i].length){
      maxstring = array[i];
    }
  }
  return maxstring.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
