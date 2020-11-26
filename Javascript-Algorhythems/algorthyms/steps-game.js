
// =========Solution-1===========

function steps(num) {

    for(let row=0; row<num; row++) {
        var result= "";

        for(let col=0; col<num; col++){
            if(col <= row) {
                result += "#";
            }else {
                result += " ";
            }
        }
        console.log(result);
        return result;
    }

}
console.log(steps(5));