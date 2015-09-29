/*
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

Here are some helpful links:
Global String Object
*/

function repeat(str, num) {
  var newStr = "";
  var i = 0;
  while(i < num){
    i++
    newStr+=str;
  }
  return newStr;
}

repeat("abc", 3);
