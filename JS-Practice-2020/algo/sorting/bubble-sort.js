// BUBBLE SORT

let Arr = [5, 1, 6, 11, 8, 15, 7];
// ----Method-1
function bubbleSort(arr) {
    // let arr = arr;
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}
// bubbleSort(Arr);

// SELECTION SORT
function selectionSort(array) {
  
}

selectionSort(numbers);