
// ===============LARGEST ELEMENT IN ARRAY===================
const arr = [5, 36, 8, 24, 10, 25];

// -----------METHOD-1
function getMax1(arr) {
    let max = null;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            max=arr[i];
        }
    }
    console.log(max);
}
// getMax1(arr);

// -----------METHOD-2
function getMax2(arr) {
    let max = arr.sort((a, b) => a - b);
    console.log(max[arr.length-1]);
}
// getMax2(arr);

// -----------METHOD-2
function getMax3(arr) {
    const maxValue = Math.max.apply(null, arr)
    console.log(maxValue);
}
getMax3(arr);