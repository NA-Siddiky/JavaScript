// JSON
const person = {
    name: "Abdullah",
    age: 34,
    district: "Dhaka",
    sealery: 37000
};
// console.log(person);
// console.log(JSON.stringify(person));
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data)
// console.log(dataParsed.name);




//API//
// fetch("url")
//     .then(res => res.json())
//     .then(data => console.log(data))


//local storage//
// localStorage.setItem("userId", 6766);
const userId = localStorage.getItem("userId");
console.log(userId);

localStorage.setItem("person", JSON.stringify(person));
const storedPerson = localStorage.getItem("person")
const parsePerson = JSON.parse(storedPerson)
// console.log(storedPerson);
console.log(parsePerson.age);

const keys = Object.keys(parsePerson)
console.log(keys);

const values = Object.values(parsePerson)
console.log(values);
