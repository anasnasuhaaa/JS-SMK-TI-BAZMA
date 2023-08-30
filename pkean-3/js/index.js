function factotial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factotial(n - 1);
  }
}
console.log(factotial(5));
