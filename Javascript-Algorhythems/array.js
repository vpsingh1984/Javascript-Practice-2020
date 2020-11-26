// ============================Array methods=======================================
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  
var newOfficersArray = [];
officers.forEach(function(item, index) {
    newOfficersArray.push(item.id);
});
// console.log("forEach Result here: ", newOfficersArray);
// -----------------------------------------------------------
var accumulatorResult = officers.reduce(function(accumulator, officer){
    return accumulator + officer.id
}, 12);
// console.log("Reduce result: ", accumulatorResult);
// ------------------------------------------------------------
var officersName = officers.map(function (officer) {
    return officer.name
});
// console.log("map returns array: ", officersName);
// ------------------------------------------------------------
var checkSome = officers.some(function(item) {
    return item.id === 24;
});
// console.log("Some return boolean: ", checkSome);

// ====================Sorting on Array========================
var points = [40, 100, 1, 5, 25, 10];

// -----------ascending order:
points.sort(function(a, b){return a-b});
console.log("ascending order: ", points);

// -----------Descending order:
points.sort(function(a, b){return b-a});
// console.log("descending order: ", points);

// -----------Highest Value in Array:
points.sort(function(a, b){return b-a});
// console.log("descending order: ", points[0]);    //set array in desending order then first element is highest value

// -----------Lowest Value in Array:
points.sort(function(a, b){return a-b});
// console.log("ascending order: ", points[0]);    // set array in ascending order then first element is lowest value

//=========================SPREAD OPERATOR========================================
// ... spread operator
var arr = [1, 2, [3, 4, [5, 6]]];
var arr1 = [4, 7];
var arr2 = [5, 6];
// console.log([...arr]);

//=========================Function========================================
var years = [2010, 2000, 1999, 1965, 1950]; 
function calculateArray(arr, fn) {
    var resultArray = [];
    for(let i=0; i<arr.length; i++) {
        resultArray.push(fn(arr[i]));
    }
    return resultArray;
}
function calcAge(el) {
    return 2019 - el;
}
var calcAge = calculateArray(years, calcAge);
// console.log(calcAge);

function calcAdultPerson() {
    return el
}
//=========================Array Clone========================================
var cisco = [1, 2, 5];
var reference = cisco.slice();
cisco.push(6);
// console.log(reference);

//=========================Get Unique Values in Array========================================
var arr11 = [1, 2, 2, 3, 3, 4, 6, 1];

// let result = new Set(arr11);
let result = arr11.filter((item, index) =>{
    return arr11.indexOf(item) === index;
});

// console.log(result);

// ==============
var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":6,"7":7,"8":0,"9":0,"10":0,"11":0,"12":12}
var result1 = Object.keys(obj).map(function(key) {
  return [Number(key), obj[key]];
});

const objArr = Object.keys(obj);
for(let key of objArr){
    // console.log(key)
}

// console.log(result1);
// =================================================

var reduceArr = [3, 4, 1];

var result1 = reduceArr.reduce(function(result, item) {
    return result + item;
});
console.log(result1);