
// with Array
var names = ["vijay", "jack", "john", "anderson"];
var [one, two, three] = names;

console.log(one, two , three);  

// with object
let food = {
    burgers: "mcDonalds",
    pizza: "Dominos"
}

let {burgers, pizza} = food;
console.log(burgers, pizza);

// Object Literals
function person(firstname, lastname, age) {
    let fullname = firstname+ " " + lastname;
    return {
        firstname,
        lastname,
        age,
        fullname,
        isSenior: () => age > 60
    }
}
let res = person("Vijay", "Singh", 35);
console.log(res.firstname, res.lastname, res.fullname, res.isSenior());