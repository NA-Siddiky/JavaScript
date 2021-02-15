// function add2(numbers) {
//     var sum = numbers[0] + numbers[1] + numbers[3];
// }

// function adding(numbers) {
//     var sum = 0;
//     input = "invalid input"
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 0) {
//             sum = sum + numbers[i];
//         }

//         else {
//             return input;
//         }
//     }
//     return sum;
// }

// var numbers = [1, -2, 4, 6];
// var result = adding(numbers);
// console.log(result);


function adding(numbers) {
    var sum = 0;
    input = "invalid input"
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {

            if (numbers[i] % 2 == 0) {
                sum = sum + numbers[i];
            }
            else {
                console.log("Its odd number", numbers[i])
            }
        }


        else {
            console.log("Its negative number", numbers[i])
            // return input;
        }
    }
    return sum;
}

var numbers = [1, 2, 4, -5, 3, -1];
var result = adding(numbers);
console.log(result);
