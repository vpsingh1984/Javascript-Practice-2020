var mySingleton = (function(){
    var instance;
    function init() {
      
      return { 
        publicProperties: "it is public properties",
        privateProperty: "Private Property",
        publicMethod: function() {
          return this.publicProperties + "and" + this.privateProperty;
        }
      }
    }
    return {
      getInstance: function() {
        if(!instance) {
          instance = init();
        }
        return instance;
      }
    };  
  }());
  var instance1 = mySingleton.getInstance();
  var instance2 = mySingleton.getInstance();
  console.log(instance1 === instance1);

//




// var SingletonTester = (function () {
 
//     // options: an object containing configuration options for the singleton
//     // e.g var options = { name: "test", pointX: 5};
//     function Singleton( options ) {
   
//       // set options to the options supplied
//       // or an empty object if none are provided
//       options = options || {};
   
//       // set some properties for our singleton
//       this.name = "SingletonTester";
   
//       this.pointX = options.pointX || 6;
   
//       this.pointY = options.pointY || 10;
   
//     }
   
//     // our instance holder
//     var instance;
   
//     // an emulation of static variables and methods
//     var _static = {
   
//       name: "SingletonTester",
   
//       // Method for getting an instance. It returns
//       // a singleton instance of a singleton object
//       getInstance: function( options ) {
//         if( instance === undefined ) {
//           instance = new Singleton( options );
//         }
   
//         return instance;
   
//       }
//     };
   
//     return _static;
   
//   })();
   
//   var singletonTestA = SingletonTester.getInstance({
//     pointX: 5
//   });
   
//   // Log the output of pointX just to verify it is correct
//   // Outputs: 5
//   console.log( singletonTestA.pointX );


function Car( model, color, year ) {
 
  this.model = model;
  this.color = color;
  this.year = year; 
}
Car.prototype.getInfo = function () {
  // this.year = 2016;
  return this.model + " " + this.year;
};

let maruti = new Car("Maruti", "Gray", 2012);
let hyundai = new Car("hyundai", "White", 2015);


// console.log(maruti.getInfo());
// console.log(hyundai.getInfo());

// console.log(maruti.getInfo === hyundai.getInfo);
// ====================================================================
const singletonObject = (function () {

  let instance;

  let init = function() {

    return {
      name: "Vijay",
      age: 35,
      fullname: function() {
        return this.name;
      }
    }
  };

  return {
    getInstance: function() {
      if(!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();

let singleA = singletonObject.getInstance();
let singleB = singletonObject.getInstance();
singleA.name = "Sam";
console.log(singleA.fullname());
console.log(singleB);