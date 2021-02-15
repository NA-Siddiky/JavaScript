// function addNumbers(number1, number2) {
//     console.log(arguments);
//     var sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         const number = arguments[i];
//         // console.log(number);
//         sum = sum + number;

//     }
//     // arguments.push(15)
//     return sum;
// }

// var result = addNumbers(3, 5, 8);
// console.log(result);




function addNumbers(number1, number2) {
    var sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        const number = arguments[i];

        sum = sum + number;
    }
    console.log(arguments);
    function logInfo(message) {
        console.log(message)
    }
    logInfo('good morning')

    var double = sum * 2;
    console.log(double);
    return sum;
}

var result = addNumbers(3, 5, 8, 16);
console.log(result);