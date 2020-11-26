

let count = 0;
const getData = () => {
  console.log("Fetching Data...", count++);
}
let d = 300;
function searchData(fn, d) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d)

  }
}
const fetchingApi = searchData(getData, d);
// ================================================

function findMax() {
    var i, max=null;
    for (i = 0; i<arguments.length; i++) {
         if(arguments[i] > max){
              max = arguments[i];
         }
    }
    return max;
}
console.log(findMax(1, 123, 500, 115, 44, 88));
