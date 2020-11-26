
/*************Bubble sorting*************/ 
const arr = [10, 0, 97, -30, 23, -6];  //

function bubbleSorting(arr) {
    for(i=0; i<arr.length; i++) {
        for(j=0; j<arr.length-i; j++) {
            if(arr[j] > arr[j+1]) {
                let val = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = val;
            }
        }
    }
    return arr;
}

// =============Quick Sorting on Array============
let quickArray = [5,3,7,6,2,9];
function quickSorting(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];

    let left = [];
    let right = [];

    for(let i=1; i<arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return quickSorting(left).concat(pivot, quickSorting(right));
}
console.log(quickSorting(quickArray));



/******selection sorting****/ 
function selectionSorting(arr) {
    for(let i=0; i<arr.length; i++) {
        let indexOfMin = i;
        for(let j = i+1; j<arr.length; j++) {
            if(arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if(indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}

// console.log(selectionSorting(arr));

/******merge two arrays in sorting order****/ 
let arr1 = [3, -10 , 30];  
let arr2 = [6, 2, -7];
arr1.sort();
arr2.sort();

function merge(arr1, arr2) {
    let results = [];
    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]) {
            results.push(arr1.shift());
        }else {
            results.push(arr2.shift());
        }
    }
    return [...results, ...arr1, ...arr2];
}

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    const center = Math.floor(arr.length/2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}
// console.log(mergeSort(arr));


// console.log(arr.shift())

let i = [1, 2, 3, 4];
let iterator = i[Symbol.iterator]();

console.log(iterator.next());

