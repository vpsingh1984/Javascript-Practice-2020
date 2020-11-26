function addNumbers(n1, n2, n3) {
    return n1 + n2 + n3;
}

function addNumbers(n1, n2) {
    return n1 + n2;
}

var sum = addNumbers(1, 2, 3);
// console.log(sum);

var alert = function(message) {  
    console.log(message);
}  
// The following calls will invoke the overridden alert() function  
// alert("Learn ");
// alert("JavaScript");

// ========================================================================

// const hello = function() {
//   console.log(this);
// }
hello = () => {
    console.log(this);
}
window.addEventListener("load", hello);
document.getElementById("btn").addEventListener("click", hello);