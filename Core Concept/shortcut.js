const money = 150;
// let food;
// if (money > 100) {
//     food = "birany"
// }
// else {
//     food = "alu vorta"
// }
// console.log(food)


//stricture of ternary operator'?' 
// variable = condition ? true value : false value

// let food = money > 100 ? "birany" : "alu vorta"
// console.log(food)


const active = false;

let cssClass1
if (active === true) {
    cssClass1 = "active"
}
else {
    cssClass1 = "inactive"
}

let cssClass2
const cssClass = active ? "active" : "inactive";
// function calling
// active ? displayUser() : hideUser();

// active && displayUser();
// active||displayUser();

// let x = active && 5;
// console.log(x)

let y = active || 10;
// console.log(y)





// converting to number from string//
const numbers1 = "45";
// console.log(numbers1);

const number2 = +"45";
// console.log(number2);


// converting string from number//
const numText = 55 + " "
// console.log(numText);



function add(x, y = 5) {
    y = y || 5;
    return x + y;
}
// console.log(add(1, 3));
