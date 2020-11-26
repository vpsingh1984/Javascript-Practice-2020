function myDisplayer(some) {
    setTimeout(() => {
        console.log(some)
    }, 1);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
    console.log("result is", sum);
  }
  
  // myCalculator(5, 5, myDisplayer);

//   console.log(x(2, 3))

class Player {
  constructor(name, type) {
    console.log("Player ", this);
    this.name = name;
    this.type = type;
  }
  introducer = function() {
    console.log(`I am ${this.name} and I am ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("Wizard ", this);
  }
  play = function() {
    console.log(`I am ${this.type}`);
  }
}

const player1 = new Wizard('Vijay', 'Healer');

// console.log(player1);