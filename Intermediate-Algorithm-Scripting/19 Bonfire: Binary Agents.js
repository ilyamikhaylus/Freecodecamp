/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/

function binaryAgent(str) {
  var arr = str.split(" ");
  var digit = [];
  var text = "";
  for (index in arr){
    digit[index] = parseInt(arr[index], 2);
    text+= String.fromCharCode(digit[index]);
  }
  return text;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
