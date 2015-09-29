/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
Note that the three dots at the end add to the string length.

Here are some helpful links:
String.slice()
*/

function truncate(str, num) {
  var dots = "..."
  if(str.length > num){
    str = str.slice(0,-(str.length-num+dots.length));
    str = str + dots;
  }
  return str;
}

truncate('Peter Piper picked a peck of pickled peppers', 14);
