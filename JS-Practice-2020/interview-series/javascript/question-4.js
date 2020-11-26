
// What will be the output of below function?
// Company : Anonymous

var arguments = [1, 2, 3];

// case-1
var arr = () => arguments[0];
arr(); // 1

// case-2
function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3);