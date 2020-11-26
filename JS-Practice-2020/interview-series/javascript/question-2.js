
// What will be the output of below function?
// Company : Anonymous

let counter = 0;
function count() {
  debugger;
  if(counter > 3) {
    return counter;
  }
  
  counter++;
  count();
}
console.log(count());