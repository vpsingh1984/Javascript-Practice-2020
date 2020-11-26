// Find maximum product of two integers in an array
const Arr = [5, -6, 3, 8, 11, 10, -40];

// -----METHOD-1
function findMaxProduct1(arr) {
    let num1 = arr[0];
    let num2 = arr[1];
    if(arr.length < 2) {
        return "There is only one item in Array";
    }

    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i]*arr[j] > num1 * num2) {
                num1 = arr[i];
                num2 = arr[j];
            }
        }
    }
    return [num1, num2];
}
// console.log(findMaxProduct1(Arr));

// -----METHOD-2
// Step-1: sort the array first with comparison
function findMaxProduct2(arr) {
    arr.sort((a, b) => a-b);
    let num1;
    let num2;

    let sum1 = arr[0] * arr[1];
    let sum2 = arr[arr.length-1] * arr[arr.length-2];

    if(sum1 > sum2) {
        num1 = arr[0];
        num2 = arr[1];
    }else {
        num1 = arr[arr.length - 1];
        num2 = arr[arr.length - 2];
    }
    return [num1, num2];
    // console.log(arr);
}
// console.log(findMaxProduct2(Arr));

// -----METHOD-3
// Step-1: sort the array first with comparison
function findMaxProduct3(arr) {
    let max1 = arr[0];
    let max2;
    let min1 = arr[0];
    let min2;

    for (let i = 1; i<arr.length; i++) {
        if(arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        }else if(arr[i] > max2) {
            max2 = arr[i];
        }

        if(arr[i] < min1) {
            min2 = min1;
            min1 = arr[i];
        }else if(arr[i] < min2) {
            min2 = arr[i]
        }        
    }
    if(max1 * max2 > min1 * min2) {
        return [max1, max2];
    }else {
        return [min1, min2];
    }
}
// console.log(findMaxProduct3(Arr));

let counter = 0;
function count() {
//   debugger;
  if(counter > 3) {
    return counter;
  }
  
  counter++;
  count();
}
let result = count();
console.log(result);
console.log(counter);