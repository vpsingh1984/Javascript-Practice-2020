

function first() {
    setTimeout(function() {
        console.log("first called");
    }, 2000);
}

function second() {
    console.log("second called");
    first();
    console.log("The End");
}

second();