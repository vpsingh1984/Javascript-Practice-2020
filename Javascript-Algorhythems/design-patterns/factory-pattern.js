const humanFactory = function(name, gender, age) {
    let factoryObj = {};

    factoryObj.name = name;
    factoryObj.gender = gender;
    factoryObj.age = age;

    factoryObj.human = function() {
        console.log(this.name + "," + this.gender + "," + this.age)
    }

    return factoryObj;
}

let man = new humanFactory("sam", "male", "35");
let woman = new humanFactory("riya", "female", "30");

man.human();
woman.human();
console.log(humanFactory.age);