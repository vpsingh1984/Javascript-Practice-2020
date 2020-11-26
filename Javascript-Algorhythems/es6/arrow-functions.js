
var add = function(a, b) {
    return a+b;
}
let addition = (a, b) => a+b;
// console.log(addition(7,5));
var logUpperCase = function() {
    this.string = this.string.toUpperCase()
    return () => console.log(this.string)
}
var newObject = { string: 'es6 rocks' };
logUpperCase.call(newObject)();
// ==================================================

// ES5
var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map(function (value) {
  return "ID is " + value // explicit return
});

// ES6
var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map(value => `ID is ${value}`) // implicit return

// ======================================================
// let People = function(person, age) { 
//     this.person = person; 
//     this.age = age; 
//     this.info = function() { 
//     console.log(this);  
//        setTimeout(() => {
//         console.log(this.person + " is " + this.age + " years old"); 
//        }, 3000);
//     }
// }
// let person1 = new People('John', 21); 
// console.log(person1.info())  ;

let people = {
    name: "john",
    age: 25,
    info: () => { 
     console.log(this);
     setTimeout(() => {
        console.log(this.name, this.age); 
      }, 1000);
    }
}
console.log(people.info());


function sum(a, b) {
  var arr = [1, 2];
  console.log(typeof arr);
  return a + b;
}
sum(2, 5);
console.log(typeof sum);