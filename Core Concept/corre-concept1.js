//------------------ variable: ------------------From line 1 - 18
let money = 45;
money = 22;

let isConfidential = false; //false is a negative value /
const name = 'Kuddus';

//Creating object and call it dynamically //
const person = {
    name: 'Mokless',
    age: 44,
    city: 'Dhaka'
}
const statement = `The person ${person.name} have ${money} TK at the age of ${person.age}`
console.log(statement);
// console.log(person);


//------------------ Condition: ------------------From line 20 to 27
if (money > 20 && person.age >= 30) {
    console.log("we found the person");
}
else {
    console.log("not found the person");
}


//------------------ array: ------------------From line 29 to 
const numbers = [44, 45, 46, 55, 65]
console.log(numbers);
const respectedPerson = ["Motiur", "Jahinger", "Hamid"]
console.log(respectedPerson);
const products = [{ name: 'laptop', price: 5000 }, { name: 'Mobile', price: 300 }, { name: 'Watch', price: 40 }]
console.log(products);


//------------------ loop: ------------------From line 37 to
for (let i = 0; i < numbers.length; i++) {
    const numberIs = numbers[i];
    console.log(numberIs);
}

//While Loop: ----------------//
// let i = 0;
// while (6 >= i) {
//     console.log("while loop");
// }
// console.log(numberIs); //not working after loop/


//------------------ function: ------------------From line 44 to 71 //
//regular function //
function regularAdd(number1, number2) {
    return number1 + number2;
}
const result = regularAdd(1, 2);
console.log(result);

// Arrow function //
//Arrow function with multiple parameter
const arrowAdd = (number1, number2) => number1 + number2;
const Addition = arrowAdd(10, 20);
console.log(Addition);
// console.log(arrowAdd(10, 20));

//Arrow function with single parameter
const arrowMul = number => number * 5;
const Multiplying = arrowMul(5);
console.log(Multiplying);
// console.log(arrowMul(5));

//Arrow function with multiple task
const doMath = (x, y) => {
    const sum = x + y;
    const total = sum * 2;
    return total;
}
console.log(doMath(2, 3));