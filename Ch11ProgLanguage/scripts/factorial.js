// Number -> Number
// return the factorial of num
// given 4 -> expected 24
// given 8 -> exepcted 40320

function FirstFactorial(num) {

// code goes here
result = 1;
while (num > 1) {
    result = result * num;
    num--;
}

return result;

}

function TestFirstFactorial(given, expected) {

  result = FirstFactorial(given);
  if ( result == expected) {
      console.log("passed");
      return true;
  }

  console.log("failed: expected: ", expected, " returned: ", result)
  return false;
}

TestFirstFactorial(4, 24);
TestFirstFactorial(8, 40320);
 
