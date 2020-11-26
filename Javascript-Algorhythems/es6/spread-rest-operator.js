// ===========Rest Operator=====================
function total(...numList) {
    return numList.reduce((totalValue, num) => {
        return totalValue + num;
    })
}
console.log(total(3, 5, 6, 7, 8, 9));


// ===========Spread Operator=====================
function add(a, b, c){
    return a+b+c;
}
var params = [2, 3, 4];
console.log(add(...params));            //ES6
console.log(add.apply(null, params));  //ES5
