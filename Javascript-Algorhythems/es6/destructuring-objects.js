
processData2({
    title: "Hulk",
    release_date: "27-12-2014",
    actor: "Sammy"
});
// ======Type-1==========
function processData1(data){
    const {title, release_date, actor} = data;
    console.log(`the moview ${title} released on ${release_date} and hero was ${actor}`);
}

// ======Type-2==========
function processData2({title, release_date, actor}){
    console.log(`the moview ${title} released on ${release_date} and hero was ${actor}`);
}

// ======Nested destructuring object==========
const nestedObj = {
    title: "Hulk",
    release_date: "27-12-2014",
    actors: {
        actor: "Sammy",
        actress: "Jenny"
    }
}
getActors(nestedObj);
function getActors({actors: {actor, actress}}) {
    console.log(`Actor is ${actor} and Actress is ${actress}`);
}

// property order does not effect destructuring
// in destructuring its picks property by name
getArea({height: 100, width: 50});
function getArea({width, height}) {
    console.log(width*height);
}