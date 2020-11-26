
// function sum(a) {
//     let num = 5;
//     return function() {
//         return num;
//     }
// }

// console.log(sum(2)(4));


function test(a) {
    const num = a;

    if(num) {
        const num1 = 3;
        // num = num + num1;
    }
    console.log(num1);
}
// console.log(sum(5)());

var a = [1, 2, 3];



// a.push(4);
// console.log(a);
// console.log(a);
// console.log(a === a);

let sum = (a) => {
    return (b) => {
        if(b) {
            return sum(a+b);
        }
        return a;
        
    }
}

// function sum(a) {
//     return function (b) {
//         return sum(a+b);
//     }
// }

console.log(sum(1)(2)(3)(4)());
// ============================================

const getData = function() {
    console.log("Fetching Data");
}
    
const deBouncing = function(fn, d) {
    return setTimeout(fn, d)
};
console.log(deBouncing(getData, 3000));