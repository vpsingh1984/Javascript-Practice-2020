
// var x = (0.2 * 10 + 0.1 * 10) / 10;  
// var y = 0.3;

// if(x === y) {
//     console.log("both are equal");
// }

function testCon(){
    this.name="S.S"
    
    function testDisplay(){
       console.log(this.name);
    }
   
   }
   // delete testOb.name;
   
   var newObj = new  testCon();
   // console.log(newObj);
   
//    delete newObj.name
   
   console.log(newObj);

   a = b = 40;
console.log(a);