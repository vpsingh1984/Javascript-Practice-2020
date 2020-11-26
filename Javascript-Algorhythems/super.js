class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasJob = false;
    }

    fullName() {
        return this.firstName + " " +this.lastName;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }
}

class Worker extends Person {
   constructor(firstName, lastName, job) {
       super()
       this.job = job;
   }

    setJob(job) {
        this.job = job;
        console.log(this.job);
    }

    printName() {
        console.log(this.fullName());
    }
}

const worker1 = new Worker("Vijay", "Singh", "Software Developer");
// worker1.setFirstName("Ajay ");
// worker1.setJob("Manager");
console.log(worker1);
// console.log(worker1.setJob("Manager"));
