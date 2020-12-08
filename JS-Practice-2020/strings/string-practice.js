
// use quotes in string
var x = "We are the so-called \"Vikings\" from the north.";
var y = 'It\'s alright.';
var z = "The character \\ is called backslash.";

// console.log(x);
// console.log(y);
// console.log(z);

// Find the string inside string
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
var pos = str.lastIndexOf("locate");

// console.log(pos);

// search the string inside string
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");


function isString1(input) {
    console.log(typeof input)
    if(typeof input == 'string')
      console.log('true');
    else
      console.log('false');
  }
  isString1(() => {return true});