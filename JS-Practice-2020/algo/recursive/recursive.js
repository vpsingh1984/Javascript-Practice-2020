
// Find the Factorial of any number

// ----Method-1
function findFactorial1(num) {
    let result = num;
    while(num > 1) {
        result *= (num - 1);
        num--;
    }
    console.log(result);
}
// findFactorial1(8);

// -----Method-2
function findFactorial2(num) {
    if(num === 2 || num === 1) {
      return num;
    }
    return num * findFactorial2(num-1);
  }
// console.log(findFactorial2(1));
// ==========================================================

// value: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// index: 0, 1, 2, 3, 4, 5, 6,  7,  8,  9, 10, 11, 12.....
// Find the indexed valued in above Fibonacci series
// index we pass in function

// ----Method-1
function fibo1(num) {
  // let result = 0;
  if(num < 2) {
    return num;
  }
  return fibo1(num - 1) + fibo1(num - 2);
}
// console.log(fibo1(4));

// ----Method-2
function fibo2(num) {
  let arr = [0, 1];
  if(num < 2) {
    return arr[num];
  }
  for(let i=2; i<=num; i++) {
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr[num];
}
console.log(fibo2(8)); // 21