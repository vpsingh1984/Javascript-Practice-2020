function insertField() {
  var totalFields = parseInt(document.getElementById("mySelect").value);
  if (totalFields >= 1) {
    var field = 1;
    var inputField = '<input type="text" />';
    while (field <= totalFields) {
      document.getElementById("demo").innerHTML += inputField;
      field++;
    }
  }
}

// ===============================================================

var person1 = {
  name: "Nicholas"
};
// console.log(Object.isExtensible(person1)); // true
// console.log(Object.isSealed(person1)); // false
// console.log(Object.isFrozen(person1)); // false

Object.freeze(person1);

// console.log(Object.isExtensible(person1)); // false
// console.log(Object.isSealed(person1)); // true
// console.log(Object.isFrozen(person1)); // true

person1.sayName = function() {
  console.log(this.name);
};

// console.log("sayName" in person1); // false

person1.name = "Greg";
// console.log(person1.name); // "Nicholas"

delete person1.name;

// console.log("name" in person1); // true
// console.log(person1.name); // "Nicholas"

var descriptor = Object.getOwnPropertyDescriptor(person1, "name");

// console.log(descriptor.configurable); // false
// console.log(descriptor.writable); // false
// =====================================================================
var arr1 = [1, 3, 5, 8]; 
var arr2 = [1, 3, 5, 7];

function compareArrays(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  console.log(arr1, arr2);
  
  if(arr1.length != arr2.length) {
    return true;
  }
  for(let i=0; i<arr1.length; i++) {
    if(arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;


}

compareArrays(arr1, arr2);
