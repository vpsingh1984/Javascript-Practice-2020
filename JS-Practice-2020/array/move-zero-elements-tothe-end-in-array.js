
// ===============MAX DIFFERENCE BETWEEN ELEMENTS IN ARRAY===================
const arr = [0, -3, 0, 12, 50];

// -----------METHOD-1
function moveZeroToEnd(arr) {
    // let newArray = null;
    for(let i=arr.length-1; i>=0; --i) {
        if(arr[i] === 0) {
            let newArray = arr.splice(i, 1);
            arr.push(newArray[0]);
        }
    }
    console.log(arr);
}
moveZeroToEnd(arr);