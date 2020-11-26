// function parentFunction() {

//     let data = "demo only";
    
//     let foo = function() {
//         console.log("classic function", data)
//     };
//     let bar = () => {
//         console.log("arrow function", data);
//     };

//     foo();
//     bar();
// }

// function MyConstructor(){
//     var myVar= 'foo';
//     console.log(this)
//     function myFunc() {
//       console.log(myVar)

//       setTimeout(function() {
//         console.log(this)
//       }, 1000)
//     }
// }

// var newCons = new MyConstructor();
// console.log(newCons.myFunc());

// let obj = {
//     myVar: 'foo',
//     myFunc: function() {
//       let self = this;

//       setTimeout(function() {
//         console.log(self.myVar);
//       }, 1000)
//     }
//   };

function interviewQuestion(job) {
  var content = "";  
  
  return function(name) {
    if(job === "designer") {
      content = "can you please explain what UX design is?"
    }else if (job === "teacher") {
      content = "What subject do you teach ";
    }else {
      content = "can you please explain what you do?";
    }
    return console.log(name + " " + content);
  }
}

// interviewQuestion("designer")("John");
// var jobtype = interviewQuestion();
// jobtype("vj");

for(var i=0; i < 5; i++){
  console.log(i);

  setTimeout(function(){
      console.log(i);
  }, 5000)

  console.log(i);

}