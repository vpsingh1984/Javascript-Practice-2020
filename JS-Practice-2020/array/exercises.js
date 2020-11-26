
// ===============REMOVE DUPLICATE ITEMS IN ARRAY===================
const arr = [5, 6, 6, 8, 2, 8, 5, 10];
// -----------METHOD-1
function uniqueValue1(arr) {
    let Obj = {};
    for(let i=0; i<arr.length; i++) {
        Obj[arr[i]] = true;
    }
//   console.log(Obj);
  let newArr = [];
  for(let key in Obj){
    newArr.push(key);
  }
  console.log(newArr);
}
// uniqueValue1(arr);

// -----------METHOD2
function uniqueValue2(arr) {
    const newArr = [...new Set(arr)];
    console.log(newArr);
}
// uniqueValue2(arr);

// -----------METHOD3
function uniqueValue2(arr) {
    const newArr = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    });
    console.log(newArr);
}
uniqueValue2(arr);