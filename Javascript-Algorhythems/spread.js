const obj1 = { a: 1, b: 2 }
const obj2 = { e: 7, a: 2, b: 3, d: 4}


const obj3 = {...obj2, ...obj1}

console.log(obj3);

for(var i=0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 0)
}
