// ==================TYPE-1====================================
function Person(firsname, lastname) {
    this.firsname = firsname;
    this.lastname = lastname;
}
Person.prototype.fullName = function() {
    return this.firsname + " " + this.lastname;
}
var newPerson = new Person("John", "Corner");
// newPerson.proto.myname = "Vijay";
// console.log(newPerson);

// ==================TYPE-2====================================
var Animal = {
    fullName: function() {
        return this.firsname + " " + this.lastname;
    }
}
// var newAnimal = Object.create(Animal);
var newAnimal = new Animal;
// console.log(newAnimal);
// ==================TYPE-3====================================
