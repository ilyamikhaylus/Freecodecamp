/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Here are some helpful links:
String.charAt()
*/

function titleCase(str) {
  str = str.toLowerCase();
  var array = str.split(" ");
  for (var i in array){
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  str = array.toString().replace(/,/g, " ");
  return str;
}

titleCase("I'm a little tea pot");
