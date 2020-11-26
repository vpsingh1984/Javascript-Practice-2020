
var myArr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
function linearSearchExample(elem){
  for(var i=0; i<myArr.length; i++){
    if(myArr[i] === elem) {
      return myArr[i];
    }
  }
  return "not in list";
}
// console.log(linearSearchExample(23));

/************************************************************************/
var arr = [1, 2, 12, 20, 23, 32, 34, 50];
// SOLUTION-1
function binarySearch1(arr, elem){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start+end)/2);

    while(arr[middle] !== elem && start <= end){
        if(arr[middle] < elem){
            start = middle + 1;
        }else {
            end = middle - 1;
        }
        middle=Math.floor((start+end)/2);
    }
    return arr[middle] === elem ? arr[middle] : -1;
}
console.log(binarySearch1(arr, 23));
// SOLUTION-2
function binarySearch2(arr, elem, start, end) {

    let mid=Math.floor((start + end)/2); 
    if(arr[mid] === elem) {return arr[mid]}

    if(arr[mid] < elem) {
        start = mid+1;
    }else {
        end = mid-1;
    }
    return binarySearch2(arr, elem, start, end);
}
// binarySearch2(arr, 12, 0, arr.length-1);

/************************************************************************/ 
var stringArray = ["swift", "dzeta", "baleno", "honda", "dzire", "creta"];
function stringBinarySearch(arr, str) {
    start = 0;
    end = arr.length - 1;
    while(start <= end){
        middle = Math.floor((start + end)/2);
        var res = str.localeCompare(arr[middle]);
        if(res === 0){
            return middle;
        }
        if(res > 0){
            start = middle + 1;
        }else {
            end = middle - 1;
        }
    }
    return -1;
}
// console.log(stringBinarySearch(stringArray, "dzire"));

// Binary search with recursive pattern
function recursiveBinarySearch(arr, x, start, end) { 
       
    // Base Condtion 
    if (start > end) return false; 
   
    // Find the middle index 
    let mid=Math.floor((start + end)/2); 
   
    // Compare mid with given key x 
    if (arr[mid]===x) return arr[mid]; 
          
    // If element at mid is greater than x, 
    // search in the left half of mid 
    if(arr[mid] > x)  
        return recursiveBinarySearch(arr, x, start, mid-1); 
    else
  
        // If element at mid is smaller than x, 
        // search in the right half of mid 
        return recursiveBinarySearch(arr, x, mid+1, end); 
} 

let arrRecursive = [1, 3, 5, 7, 8, 9]; 
let x = 5; 
 
console.log((recursiveBinarySearch(arrRecursive, 5, 0, arr.length-1)));