/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Here are some helpful links:
Arithmetic Operators
*/

function factorialize(num) {
  var factorial=1;
  for(i = 1; i <= num; i++){
    factorial*=i;
  }
  return factorial;
}

factorialize(5, '');
