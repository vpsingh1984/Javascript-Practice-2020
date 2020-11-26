// palindrome is when original string and reversed string is equal

function palindrome1(str) {
    const newStr = str.split("").reverse().join("");
    return newStr === str;
}

function palindrome2(str) {
    console.log(str.split(""))
    const result = str.split("").every((char, index) => {
        return char === str[str.length - index - 1]
    });
    // console.log(result);
    return result;
}
console.log(palindrome1("war jar raj raw"));
// console.log(palindrome2("war jar raj raw"));
// console.log(palindrome1("Cigar Toss it in a can It is so tragic"));