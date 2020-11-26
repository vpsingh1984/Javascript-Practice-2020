function printName() {
    var obj = this;
    Object.keys(obj).forEach(function(key) {
        console.log(key + ": ", obj[key]);
    });
}
function sum() {
    for(let i=0; i<arguments.length; i++) {
        this.num += arguments[i];
    }
    return this.num;
}

function retirementAge(a) {
    return  this.name + " has "+ (a-this.age) + " years to retirement";
}

function multiple() {
    return this.data[0]*this.data[1];
}

var student1 = {
    name: "John",
    age: 35
};
var student2 = {
    name: "Mark",
    age: 46
};
var numbers = {
    data: [2,3,5]
};

var call = retirementAge.call(student1, 55);
var result = retirementAge.bind(student2, 60);
var apply = multiple.apply(numbers);

// student2 = {};
delete student2.name;
// console.log(apply);
// console.log(result());

// console.log(sum.apply(int, arr));
// result(2)(3)(4)(5);  // 14;