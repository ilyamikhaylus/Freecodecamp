/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

Here are some helpful links:
String.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str) {
  var missingLetter = undefined;
  var unicode = str.charCodeAt(0);
  for (var i = 1; i < str.length; i++){
    if(str.charCodeAt(i) !== unicode+1){
      missingLetter = String.fromCharCode(str.charCodeAt(i) - 1);
      return missingLetter;
    } else {
      unicode++;
    }
  }
  return missingLetter;
}

fearNotLetter('yz');
