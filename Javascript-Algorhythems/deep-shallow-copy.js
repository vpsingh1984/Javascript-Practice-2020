// =======Shallow Copy================
//solution-1 using concat method
    var original = [2, 4, 6, {name: 'Captain Piett' }, 8, 9];
    var newArray = [];
    var result1 = newArray.concat(original);
    result1[0] = 7;
    result1[3]['name'] = "Vijay";
console.log(result1, original);

//solution-2 using from method
    var result2 = Array.from(original);
    result2[0] = "from";
    result2[3]['name'] = "Sam";
    // console.log(result2, original);

//solution-3 using slice method
    var result3 = original.slice(0);
    result3[0] = "slice";
    result3[3]['name'] = "slice method";
    // console.log(result3, original);

//solution-4 using ...spread operator
    var result4 = [...original];
    result4[0] = "spread";
    result4[3]['name'] = "spread method";
    // console.log(result4, original);

// shallow copy in objects
    var student = {
        "age": 21,
        "address": "Delhi",
        "language": ["english", "hindi"]
    }
    var newObject = Object.assign({}, student);
    newObject.age = 25;
    newObject.language[0] = "French";
    // console.log(newObject, student);
// ==========================================================================

// =======Deep Copy================
var parseObj = JSON.parse(JSON.stringify(student));
parseObj.age = 30;
parseObj.language[0] = "German";
console.log(JSON.parse(JSON.stringify(student)));
// ==============================================================


