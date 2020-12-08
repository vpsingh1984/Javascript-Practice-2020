
let arr = [2, 2, 5, 6, 3, 2, 3, 5]


function fintDuplicate2(arr) {
    let obj = {};
    let output = [];
  
    arr.forEach((item) => {
        if(!obj[item]) {
          obj[item] = 1;
        }else {
          obj[item] += 1
        }
      });
      console.log(obj)
      for(let key in obj) {
        if(obj[key] >= 2) {
          output.push(key);
        }
      }
      console.log(output)
  
  }
  console.log(fintDuplicate2(arr));