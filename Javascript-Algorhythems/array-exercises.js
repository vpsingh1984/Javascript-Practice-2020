/*Rearrange an array such that arr[i] = i
Given an array of elements of length N, ranging from 0 to N – 1. 
All elements may not be present in the array. If element is not present then 
there will be -1 present in the array. Rearrange the array such that A[i] = i 
and if i is not present, display -1 at that place.*/
const arr1 = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
//Output should be: [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]
function reArrangeArray(arr) {
  let output = [];
  arr = arr.sort();
  let customLength = arr.length;
  let newArray = arr.filter(item => {
    return item >= 0;
  });
  for (let i = 0; i < customLength; i++) {
    if (newArray.includes(i)) {
      output.push(i);
    } else {
      output.push(-1);
    }
  }
  return output;
}
// console.log(reArrangeArray(arr1)); //returns: [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]
// ==============================================================================
/*Sort an array without changing position of negative numbers*/
const arr2 = [7, 5, 2, -6, -3, 8, 4, 1];
//Output should be: [1, 2, 4, -6, -3, 5, 7, 8]
function arrangeArray(Arr) {
  for (let i = 1; i < Arr.length; i++) {
    if (Arr[i] >= 0) {
      for (let j = 0; j < i; j++) {
        if (Arr[i] < Arr[j]) {
          let x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }
      }
    }
  }
  console.log(Arr);
  return Arr;
}
// arrangeArray(arr2);

// ======================Palindrome Check==========================
function palindrome(string) {
  var newString = string
    .split("")
    .reverse()
    .join("");
  return string === newString;
}
function getPalindrome3(S) {
  var maxLength = 0;
  var subString = "";
  while (0 < S.length) {
    var outputStr = "";
    for (var i = 0; i < S.length; i++) {
      outputStr += S[i];
      if (palindrome(outputStr) && maxLength < outputStr.length) {
        maxLength = outputStr.length;
        subString = outputStr;
      }
    }
    S = S.slice(1);
  }
  var primeValue = checkPrime(subString.length);
  console.log(primeValue);
  // return subString
}
function checkPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return true;
}
console.log(getPalindrome3("122243323341"));

// ==============Delete Element in Array==============
const customArr = [2, 4, 6, 8, 10, 12, 14, 16];

//Question-1: Delete the ith index element in array
function deleteIndexValue(arr, index) {
  const head = arr.slice(0, index);
  const tail = arr.slice(index + 1);

  return [...head, ...tail];
}

//Question-2: Delete the ith key element in array
function deleteKeyValue(arr, value) {
  const index = arr.indexOf(value);
  return deleteIndexValue(arr, index);
}
// console.log(deleteKeyValue(customArr, 14));

// ==============Delete Element in Array==============
let sortArray = [10, 7, 9, 2, 8, 3, 5, 4, 6, 1];
// Returning: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] its possible only when array has values 1-n
function sortArrayFn(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  }
  return arr;
}
// console.log(sortArrayFn(sortArray));

// ==============Sort an array containing only two types of elements==============
inputArray = [0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0];
// Output should be : arr[] = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

// SOLUTION-1
function sortTheArray1(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] == 1) {
      let current = arr[i];
      arr[i] = arr[j];
      arr[j] = current;
      // swap(arr[i], arr[j])
      j--;
    } else {
      i++;
    }
  }
  return arr;
}
// SOLUTION-2
function sortTheArray2(arr) {
  let arr1 = [];
  let arr0 = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == 1) {
      arr1.push(arr[i]);
    } else {
      arr0.push(arr[i]);
    }
    i++;
  }
  return [...arr0, ...arr1];
  // return arr0.concat(arr1);
}
// console.log(sortTheArray2(inputArray));

//=================================================================
var nestedArray = [1, 2, [3, 4, [5, 6]]]; //should retrun [1, 2,3,4,5,6];
//Solution-1:
function extractNestedArray1(arr, depth = 1, arr1 = []) {
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      extractNestedArray1(item, depth - 1, arr1);
    } else {
      arr1.push(item);
    }
  }
  return arr1;
}
// console.log(extractNestedArray1(nestedArray, Infinity));

//Solution-2:
var flatResult = nestedArray.flat(Infinity);
// console.log(flatResult);

//Solution-3:
function extractNestedArray2(arr) {
  const arrvalue = arr.join().split(",");
  let i = 0;
  while (i < arrvalue.length) {
    arrvalue[i] = parseInt(arrvalue[i]);
    i++;
  }
  console.log(arrvalue);
}
// extractNestedArray2(nestedArray);

//=======================
let A = [1, 5, 9, 10, 15, 20];
let B = [2, 3, 8, 13];
// output should be: A = [1, 2, 3, 5, 8, 9] and B = [10, 13, 15, 20]
// Solution-1:
function mergeTwoArray(arr1, arr2) {
  let L1 = arr1.length;

  const fullArray = [...arr1, ...arr2];
  fullArray.sort((a, b) => a - b);

  let A1 = fullArray.slice(0, L1);
  let B2 = fullArray.slice(L1);
  console.log(A1);
  console.log(B2);
  // return arr1, arr2;
}
// mergeTwoArray(A, B);

// =========Merging two unsorted arrays in sorted order==========
function mergeUnsortedArrays(arr1, arr2) {
  let mergeArray = [...arr1, ...arr2];
  mergeArray.sort((a, b) => a - b);
  console.log(mergeArray);
}
mergeUnsortedArrays(A, B);

// =========Find Duplicate values in Array==========
var dupArray = [40, 100, 1, 5, 25, 10, 40, 100];
function findDuplicateValues(arr) {
  var result = [];
  dupArray.filter(function(item, index) {
    if (dupArray.indexOf(item) !== index) {
      result.push(item);
    }
  });
  return result;
}
// console.log(findDuplicateValues(dupArray));

// ============Get Unique values from array OR remove duplicate values in array===========
var names = ["John", "Peter", "Peter", "Harry", "John", "Alice"];
//Solution-1:  Javascript
function getUnique(names) {
  var resultArr = [];
  for (var i in names) {
    if (resultArr.indexOf(names[i]) === -1) {
      resultArr.push(names[i]);
    }
  }
  return resultArr;
}
// console.log(getUnique(names));

//Solution-2: ES6
var setResult = [...new Set(names)];
// console.log(setResult);

// ============Alternative Sorting in Array=========
let alternateArr = [1, 6, 9, 4, 3, 7, 8, 2, 5];
// Output : [9 1 8 2 7 3 6 4]

function alternativeArray(arr) {
  let resultArray = [];
  arr.sort((a, b) => a - b);
  let mid;
  if (arr.length % 2 !== 0) {
    mid = arr[(arr.length - 1) / 2];
  }
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    resultArray.push(arr[j]);
    resultArray.push(arr[i]);
    i++;
    j--;
  }
  if (mid) {
    resultArray.push(mid);
  }
  console.log(resultArray);
}
// alternativeArray(alternateArr);

// =======Sort an almost sorted array where only two elements are swapped========
let swappArray = [10, 20, 60, 40, 50, 30, 70, 80];
// Output: [10, 20, 30, 40, 50, 60, 70, 80]

function sortArrayWithSwapped(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let leftVal;
    let rightVal;
    if (arr[i] > arr[i + 1] || arr[j] < arr[j - 1]) {
      leftVal = arr[i];
      rightVal = arr[j];
      let current = rightVal;
      rightVal = leftVal;
      leftVal = current;
    }
    i++;
    j--;
  }
  console.log(arr);
}
// sortArrayWithSwapped(swappArray);

// ==========Sort An Array==================
let sortA = [4, 2, 1];
function sArray(arr) {
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(arr);
}
sArray(sortA);

//=======Get the element with the highest occurrence in an array ======
const arrDupValues = ["apple","orange","banana","apple","apple"];

function maxOccurance(arr) {
    let maxCount = 0; let maxValue = "";
    const objTest = {};
    for(let i=0; i<arr.length; i++){
      if(objTest[arr[i]])
        objTest[arr[i]]++;
      else
        objTest[arr[i]] = 1;
      if(maxCount < objTest[arr[i]]) {
        maxCount = objTest[arr[i]];
        maxValue = arr[i];
      }
    }
}
console.log(maxOccurance(arrDupValues))

// =============Compare two array================
var arr1 = [1, 3, 5, 8]; 
var arr2 = [1, 3, 5, 7];

function compareArrays(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  if(arr1.length != arr2.length) {
    return true;
  }
  for(let i=0; i<arr1.length; i++) {
    if(arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}
compareArrays(arr1, arr2);