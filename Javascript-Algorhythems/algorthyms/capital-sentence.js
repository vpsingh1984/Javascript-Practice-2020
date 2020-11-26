// capitalize first character in every word in sentence
// ======Solution-1==============================`
function capitalizeString(str) {
    let words = [];
    for(let word of str.split(" ")){
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(" ");
}
console.log(capitalizeString("?# hi vijay how are you"));
