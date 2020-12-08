

myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);

console.warn(JSON.parse(text));

var obj1 = JSON.parse('{ "name":"John", "age":30, "address": {"city":"New York"}}');

console.log(obj1);