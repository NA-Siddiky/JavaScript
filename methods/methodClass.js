// using "new" keyword to make using class /

class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person("hero", "Balam", 2000);
console.log(heroPerson);
const friendlyPerson = new Person("Hero", "Kalam", 1000)
console.log(friendlyPerson);




// old style function calling /
// function PersonClassOld(firstName, lastName, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }
// const oldPerson = new PersonClassOld("Grand", "Maa", 100);
// console.log(oldPerson);