// Method-1
function reverseStr1(str) {
    let totalLength = str.length - 1;
    let newArr = [];
    for(let i = totalLength; i >= 0; i--) {
        newArr.push(str[i]);
    }
    console.log(newArr.join(''));
}
// reverseStr1("hello vijay");

// Method-2
function reverseStr2(str) {
    let result = str.split('').reverse().join('');
    console.log(result);
}
// reverseStr2("hello ");

// Method-3
function reverseStr3(str) {
    let result = [...str].reverse().join('');
    console.log(result);
}
reverseStr3("Vijay Hi");