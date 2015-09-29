/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Here are some helpful links:
Roman Numerals
Array.splice()
Array.indexOf()
Array.join()
*/

function convert(num) {
  var decVal = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var romNum = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  var numCopy = num;
  var roman ="";
  while(numCopy > 0){
    for(var i in decVal){
      if(+decVal[i] <= numCopy && +decVal[+i+1] > numCopy){
        roman+= romNum[i];
        numCopy-= decVal[i];
      }
    }
  }
 return roman;
};

convert(36);
