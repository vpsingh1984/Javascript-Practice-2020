// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// Solution-1====================================================
function chunk1(array, size) {
    let chunkContainer = [];
    let chunkArray = [];
    for(let i=0; i<array.length; i++){
        if(chunkArray.length <= size){
            chunkArray.push(array[i]);
        }
        if(chunkArray.length === size || i === array.length - 1){
            chunkContainer.push(chunkArray);
            chunkArray = [];
        }
    }
    return chunkContainer;
}
// Solution-2====================================================
function chunk2(array, size) {
    const chunked = [];
    let index = 0;
    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

// Solution-3====================================================
function chunk3(array, size) {
    const chunked = [];
    for(let element of array) {
        const last = chunked[chunked.length - 1];
        console.log(last);
        if(!last || last.length === size) {
            chunked.push([element]);
        }else {
            last.push(element);
        }
    }
    return chunked;
}

let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function chunkArray(arr, size) {
    const chunked = [];

    for(let element of arr) {
        const last = chunked[chunked.length - 1];
        if(!last || last.length === size) {
            chunked.push([element]);
        }else {
            last.push(element);
        }
    }
    return chunked;
}
console.log(chunkArray(sampleArray, 3));