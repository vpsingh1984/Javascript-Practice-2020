// Convert string to revert

// Solution-1=========================================
function revertString1(str) {
    const data = str.split("").reverse().join();
    console.log(data);
}
revertString1("Hello");

// Solution-2==========================================
function revertString2(str) {
    let stringValue = "";
// Loop-1
    // for(let i=0; i<str.length; i++) {
    //     stringValue = str[i] + stringValue;
    // }
// Loop-2
    for(let char of str) {
        stringValue = char + stringValue;
        console.log(stringValue);
    }
    return stringValue;
}
revertString2("vijay");

// Solution-3==========================================
function revertString3(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}
console.log(revertString3("John"));