// applies to positive integers
// always possible to get 'back to 1'
//if you follow these steps
// 1 - if n is 1 stop
//Otherwise, if n is even, repeat this procsess on n / 2
//Otherwise, if n is odd, repeat this process on 3n + 1

function collatzConjecture(n, steps = 0) {
  if (n <= 1) {
    return steps;
  } else if (n % 2 === 0) {
    return collatzConjecture(n / 2, steps + 1);
  } else {
    return collatzConjecture(3 * n + 1, steps + 1);
  }
}

console.log(collatzConjecture(1));
console.log(collatzConjecture(2));
console.log(collatzConjecture(3));
console.log(collatzConjecture(4));
console.log(collatzConjecture(5));
console.log(collatzConjecture(6));
console.log(collatzConjecture(7));
console.log(collatzConjecture(8));
console.log(collatzConjecture(15));
console.log(collatzConjecture(27));
console.log(collatzConjecture(50));
