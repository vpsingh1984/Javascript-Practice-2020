
class Superhero{
    constructor(name, speed, weapon) {
        this._name = name;
        this._speed = speed;
        this._weapon = weapon;
    }
    get name() {
        return this._name;
    }
    set name(newname) {
        this._name = newname;
    }
}
function Superman(name, speed, weapon) {
    this._name = name;
    this._speed = speed;
    this._weapon = weapon;
}
class Human extends Superhero{
    constructor(healthpoints, ...superstuff) {
        super(...superstuff);
        this._healthpoints = healthpoints;
    }
    healthScore(num) {
        console.log(num);
        return this._healthpoints;
    }
}


const hero1 = new Superhero("Thor", "Very Fast", "Hammer");
const hero2 = new Human(20, "Superman", "Fast", "Super Power");
hero1.name = "Vijay";
console.log(hero1);
console.log(hero2.healthScore(5));
