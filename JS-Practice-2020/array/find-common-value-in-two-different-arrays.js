
// ===============FIND THE COMMON VALUE IN TWO DIFFERENT ARRAYS===================
const arrA = ['a', 'b', 'c', 'x'];
const arrB = ['z', 'y', 'x'];
// -----------METHOD-1
function findCommon1(arr1, arr2) {
    let commonArray = [];
    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                commonArray.push(arr1[i]);
            }
        }
    }
    console.log(commonArray);
}
// findCommon1(arrA, arrB);

// -----------METHOD-2
function findCommon2(arr1, arr2) {
    let map = {};
    for(let i=0; i<arr1.length; i++) {
        if(!map[arr1[i]]) {
            map[arr1[i]] = true;
        }
    }
    for(let j=0; j<arr2.length; j++) {
        if(map[arr2[j]]) {
            return true;
        }
    }
    return false;
}
// console.log(findCommon2(arrA, arrB));

// -----------METHOD-3
function findCommon3(arr1, arr2) {
    let map = arr1.some(item => arr2.includes(item));
    return map;
}
console.log(findCommon3(arrA, arrB));