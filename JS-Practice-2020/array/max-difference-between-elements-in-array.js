
// ===============MAX DIFFERENCE BETWEEN ELEMENTS IN ARRAY===================
const arr = [5, 36, -8, 24, 10, 25, 50];

// -----------METHOD-1
function getMaxDifference1(arr) {
    let sortArr = arr.sort((a, b) => a - b);
    let maxDiff = sortArr[sortArr.length -1] - sortArr[0];
    console.log(maxDiff);
    
}
// getMaxDifference1(arr);

// -----------METHOD-2
function getMaxDifference2(arr) {
    let maxDiffValue = arr[1] - arr[0];
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] - arr[i] > maxDiffValue) {
                maxDiffValue = arr[j] - arr[i];
            }
        }
    }
    console.log(maxDiffValue);   
}
getMaxDifference2(arr);
