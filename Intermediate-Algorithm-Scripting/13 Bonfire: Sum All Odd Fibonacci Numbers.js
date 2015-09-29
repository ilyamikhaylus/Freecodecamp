/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
  var fib = [];
  var temp = 0;
  var sum = 0;
  fib[0] = 0;
  fib[1] = 1;
  for (var i = 2; i < 100;i++){
      temp = fib[i-2]+fib[i-1];
      if (temp <= num){
        fib[i]=temp;
      }else{
        break;
      }
    }
  fib.splice(0,1);
  
  for (index in fib){
    if ((fib[index] % 2) !== 0) {
      sum += fib[index];
    }
  }
  return sum;
}

sumFibs(4);
