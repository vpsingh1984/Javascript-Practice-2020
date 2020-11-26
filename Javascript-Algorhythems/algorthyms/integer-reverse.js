
// Solution-1
function reverseInt1(num) {
    let result = num
                .toString()
                .split("")
                .reverse()
                .join("");
        if(num < 0){
            return parseInt(result) * Math.sign(num);
        }
    return parseInt(result);
}
console.log(reverseInt1(-80))