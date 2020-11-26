
let name = {
    firstname: "Akshay",
    lastname: "Saini"
  }
  
  let printName = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state);
  }
  
  Function.prototype.customBind = function(...arguments) {
    let callingFunction = this;
    let callingObject = arguments[0];
    let params = arguments.slice(1);
    return function(...args) {
      callingFunction.apply(callingObject, [...params, ...args])
    }
  }
  
  let executeFunction = printName.customBind(name, "Agra", "DELHI");
  
  executeFunction() 