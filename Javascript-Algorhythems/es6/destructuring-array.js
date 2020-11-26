
const arrData = [11, 12, 13, 14, 15];

printValues(arrData);

function printValues(data) {
    // const [first, second, third] = data;
    // console.log(first, second, third);

    // const [, , , four, five] = data;
    // console.log(four, five);

    const [, second, ...others] = data;
    console.log(...others);
    
}