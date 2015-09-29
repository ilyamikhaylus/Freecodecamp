/*
Check if a string (first argument) ends with the given target string (second argument).

Here are some helpful links:
String.substr()
*/

function end(str, target) {
  var ending = str.substr(-target.length,target.length);
  return ending == target;
}

end('Bastian', 'n');
