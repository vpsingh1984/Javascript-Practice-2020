
var Person = function(name, dob, job) {
	this.name = name;
	this.dob = dob;
	this.job = job;
}
var john = new Person("John", 1990, "tutor");
console.log(john);
var User = function(name, dob, job) {
	this.name = name;
	this.dob = dob;
	this.job = job;
}

Person.prototype.calculateAge = function() {
	// console.log(2019 - this.dob);
	return (2019 - this.dob);
}
Person.prototype.lastName = "Smith";


var mark = new Person("mark", 1985, "manager");
// john.prototype.firstName = "Vijay";

// if we check john.__proto__ = Person.prototype       //return true
// is shows that prototype of john is the prototype property of Person Object.

// console.log(john);
// console.log("=================");
// console.log(mark.calculateAge);

// ===========================================================================================================

var user = {
	checkThis: function() {
		var _self = this;
		console.log(_self);

		function printHere() {
			console.log(_self);
		}
	}
}
user.checkThis();

// ============================Object prototype=================================================

function Teacher(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
  }
Teacher.prototype.nationality = "English";
Teacher.prototype.name = function() {
	return this.firstName + " " + this.lastName;
};
var myTeacher = new Teacher("John", "Doe", 50, "blue");

// console.log(myTeacher.nationality);

// ==================Object.assign()=====================
// 1. it return the targeted object with merged and modified properties from source object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

// ====================Object.create()=====================
var cat = {
	color: "white",
	makeSound: function() {
		return this.sound;
	}
}
var newSound = Object.create(cat);
// console.log(Object.create(cat));

// how its work/////////////
function objCreate(proto) {
	const obj = {};
	Object.setPrototypeOf(obj, proto);
	return obj;
}
var newSound = objCreate(cat);

// ==================Object.defineProperty()=====================
// 1. you can add property to object with freeze state, after added the property not possible to change
var car = {
	modal: "swift",
	color: "white"
  };
Object.defineProperty(car, "number", {value : "delhi"});
var obj = {num: 5};
var addToThis = function(a, b, c){
	return this.num + a +b + c;
};
var result = addToThis.apply(obj, [1, 2, 4]);
car.number = "noida";
console.log(car);

// ========================
var customObj = Object.create(null);
customObj.name = "vijay";
var customObj2 = {name: "sam"};

console.log(customObj2.hasOwnProperty("name"));
console.log(customObj.hasOwnProperty("name"));
