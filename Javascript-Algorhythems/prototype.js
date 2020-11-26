// ==================TYPE-1====================================
function Person(firsname, lastname) {
    this.firsname = firsname;
    this.lastname = lastname;
}

// var person1 = new Person();
var person2 = new Person();
var person1 = new Person("Nicholas");
// console.log(person1);
// ==================TYPE-3====================================

var obj1 = {
    name: "Vijay",
    city: "Delhi",
    origin: function() {
        return this.name + " live in " + this.city;
    }
}
var obj2 = {
    name: "Sam"
}
obj2.__proto__ = obj1;
// console.log(obj2);
// =================================================================
function Human(firstName, lastName) {
	// this.firstName = firstName,
	// this.lastName = lastName,
	// this.fullName = function() {
	// 	return this.firstName + " " + this.lastName;
	// }
}
Human.prototype.name = "Sam";
Human.prototype.friends = ['Jadeja', 'Vijay']

var person1 = new Human();
// person1.prototype.city = "delhi";
var person2 = new Human();
person1.name = "vijayyyyy"
person1.friends.push("sam");
console.log(Human.prototype);
// console.log(person2);

function hello() {
    console.log("hello vijay");
}
hello.prototype.name = "vijay";

// console.log(hello.prototype);