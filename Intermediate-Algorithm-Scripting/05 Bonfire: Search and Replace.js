/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'

Here are some helpful links:
Array.splice()
String.replace()
Array.join()
*/

function replace(str, before, after) {
  var b = before;
  var a = after;
  if(b[0] == b[0].toUpperCase()){
    a = a[0].toUpperCase() + a.slice(1);
  }
  var arr = str.split(" ");
  for (var i in arr){
    if (arr[i] == b){
      arr.splice(i,1,a);
    }
  }
  var newStr = arr.join(" ");
 return newStr;
}

replace("His name is Tom", "Tom", "john");
