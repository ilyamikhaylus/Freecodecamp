/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [['G', 'C'], ['C','G'],['G', 'C']]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Here are some helpful links:
Array.push()
String.split()
*/

function pair(str) {
  str = str.split('');
  var result = [];
  
  function getPair(element) {
    switch(element) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      default:
        return 0;
    }
  }
  
  for (var i in str) {
    result.push([str[i], getPair(str[i])]);
  }

  return result;
}

pair("GCG");
