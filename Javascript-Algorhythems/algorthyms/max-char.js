
// Solution-1================================
function maxChar1(str) {
    let emptyObj = {};
    let max = 0;
    let maxchar = {};
    for(let char of str) {
        if(emptyObj[char]){
            emptyObj[char]++;
        }else {
            emptyObj[char] = 1;
        }
    }
    for(let char in emptyObj){
        if(emptyObj[char] > max){
            max = emptyObj[char];
            maxchar = char;
        }
    }
    return maxchar;
}
// Solution-2================================
function maxChar2(str) {
    let emptyObj = {};
    let max = 0;
    let maxchar = {};
    for(let char of str) {
        emptyObj[char] = emptyObj[char] + 1 || 1;
    }
    for(let char in emptyObj){
        if(emptyObj[char] > max){
            max = emptyObj[char];
            maxchar = char;
        }
    }
    return maxchar;
}

// console.log(maxChar2("tomorrow"));

// ==========================================
function solution(N) {
    if(N >= 0 ) {
        // let binaryNum = Number(N).toString(2);
        // console.log(binaryNum);
        let binaryNum = ["1", "1"];
        const stringArr = Array.from(binaryNum);
        console.log(stringArr);
        const intBinary = stringArr.map(n => parseInt(n));
        

        if(intBinary.length <= 1 || !intBinary.includes(0)) return "0 gap";
        // if () return 0;
        
        let gaps = [];
        let maxValue = 0;
        
        intBinary.map((item, index) => {
            if(item !== 0) {
                maxValue = gaps.length;
            }
            if(item === 0) {
                gaps.push(item);
                // maxValue = gaps.length;
            }
            
        });
        console.log(maxValue);
        return maxValue;
    }else {
        console.log("passed number is negative number");
    }
}
solution(100)