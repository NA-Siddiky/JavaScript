// const normalPerson = {
//     firstName: "Rahim",
//     lastName: "Uddin",
//     sealery: 15000,

//     getFullName: function () {
//         console.log(this.firstName, this.lastName);
//     },
//     creditCardBill: function (amount) {
//         this.sealery = this.sealery - amount;
//         return this.sealery;
//     }
// }

// normalPerson.creditCardBill(500);
// normalPerson.creditCardBill(500);
// normalPerson.creditCardBill(500);

// console.log(normalPerson.sealery);






// const normalPerson = {
//     firstName: "Rahim",
//     lastName: "Uddin",
//     sealery: 15000,

//     getFullName: function () {
//         console.log(this.firstName, this.lastName);
//     },
//     creditCardBill: function (amount) {
//         console.log(this);
//         this.sealery = this.sealery - amount;
//         return this.sealery;
//     }
// }

// const heroPerson = {
//     firstName: 'Hero',
//     lastName: 'Balam',
//     sealery: 2500,
// }

// const friendlyPerson = {
//     firstName: 'Hero',
//     lastName: 'Golam',
//     sealery: 500,
// }

// // normalPerson.creditCardBill();
// const heroBill = normalPerson.creditCardBill.bind(heroPerson);
// heroBill(2000);

// console.log(heroPerson.sealery);

// const friendlyBill = normalPerson.creditCardBill.bind(friendlyPerson);
// friendlyBill(100);
// console.log(friendlyPerson.sealery);












const normalPerson = {
    firstName: "Rahim",
    lastName: "Uddin",
    sealery: 15000,

    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    creditCardBill: function (amount, vat, tax) {
        console.log(this);
        this.sealery = this.sealery - amount - vat - tax;
        return this.sealery;
    }
}
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    sealery: 50000,
}
console.log("Net Sealery", heroPerson.sealery);
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    sealery: 5000,
}
// console.log("Net Sealery", friendlyPerson.sealery);

// normalPerson.creditCardBill.call(heroPerson, 500, 30, 20);
// normalPerson.creditCardBill.call(heroPerson, 100, 10, 5);
// console.log(heroPerson.sealery);

// normalPerson.creditCardBill.call(friendlyPerson, 100, 20, 10);
// console.log(friendlyPerson.sealery);
// console.log(normalPerson.sealery);


normalPerson.creditCardBill.apply(heroPerson, [100, 35, 5]);
normalPerson.creditCardBill.apply(heroPerson, [200, 70, 30]);
console.log(heroPerson.sealery);
