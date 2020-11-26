let personName = { name: 'Buckethead' };
let carArray = ["Swift", "Baleno", "Dzire"];

// shiftMethod = (arr) => {
//     return arr.shift();
// }
// unshiftMethod = (arr) => {
//     return arr.unshift("Maruti", "Ertiga");
// }

function getName(person) {
  return person.name
}
function upperCase(string) {
  return string.toUpperCase();
}
get6Characters = (string) => {
  return string.substring(0, 6);
}
reverse = (string) => {
  return string.split('').reverse().join('')
}
pipe = (...functions) => (value) => {
    // debugger;
    return functions
      .reduce((currentValue, currentFunction) => {
        //  debugger;
         return currentFunction(currentValue);
    }, value)
}

// let output = pipe(
//     shiftMethod,
//     unshiftMethod
// )(carArray);

var arr = [10, 20, 30, 40, 50, 60]; 
   
function sumofArray(sum, num) { 
    return sum + num; 
} 
function myGeeks() { 
    return arr.reduce(sumofArray); 
} 
let output = myGeeks();

console.log(output);
// 
[2, 4, 6,1,3,5].reduce((acc, n) =>
                 { 
                  console.log(acc);
                    return acc + n;
                 }
                )