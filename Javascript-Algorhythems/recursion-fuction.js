
function total(x, n) {
    var result =1;
    for(var i=0; i<n; i++) {
      console.log(result);
      result *= x;
      
    }
    return result;
  }
  
// console.log(total(2, 4));

function pow(x, n) {
    if(n === 1) {
        return x;
    }else {
        return x*pow(x, n-1)
    }
}
console.log(pow(2, 5));