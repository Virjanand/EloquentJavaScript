function recursivePower(base, exponent) {
  if (exponent == 0) {
    return 1;
  }
  else {
    return base * recursivePower(base, exponent - 1)
  }
}

console.log(recursivePower(2,3));
