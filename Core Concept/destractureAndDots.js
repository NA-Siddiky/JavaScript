//array destructuring //

const numbers = [10, 54, 92, 100, 43];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = numbers;

// const [x, y] = [54, 92];

const [x, y] = numbers;
// console.log(x, y);

function boxing(number) {
    return [number, number + 2];
}
// const boxed = boxing(5);
// console.log(boxed);

const [box1, box2] = boxing(2);
// console.log(box1, box2);



//object destructuring //
// const person = { name: 'John', age: 25 }
// console.log(person.name, person.age);

// const { name, age, money, id } = { name: 'John', age: 25, money: 100, id: 1 }
// console.log(name, age, money, id);
// console.log(name, age, money);
// console.log(name, age);
// console.log(name);

const person = { name: 'John', age: 25, money: 100, id: 1 }
const { name } = person;
// console.log(name);

//create object shortcuts//
const a = 25;
const b = 50;
const object1 = { X: a, y: b }
const object2 = { a, b }
// console.log(object1);
// console.log(object2);



//three dots// (using for creating a new array)//
// const newNumbers = [...numbers]; //getting numbers from line 3 numbers array//
const newNumbers = [...numbers, 500];
console.log(newNumbers)

numbers.push(10); //pushing an element in the old array//
console.log(numbers);