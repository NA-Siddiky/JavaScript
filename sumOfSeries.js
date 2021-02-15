// sum of array / 

// function simpleArraySum(ar) {
//     var sum = 0;

//     for (var i = 0; i < ar.length; i++) {
//         sum = sum + ar[i];
//     }
//     return sum;
// }

// var result = simpleArraySum([1, 2, 3, 4, 10, 11]);
// console.log(result);


// Practise Problem
// input (5)
// process(0 + 1 + 2 + 3 + 4 + 5)
// output = 15
// Logic of sum of a series = (n= (n+(n+1)) /

// function sumOfSeries(ar) {
//     var sum = 0;

//     for (var i = 0; i <= ar; i++) {
//         sum = sum + i;

//     }
//     return sum;
// }

// var result = sumOfSeries(5);
// console.log(result);






function simpleArraySum(ar) {
    var sum = 0;

    for (var i = 1; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

var result = simpleArraySum(6, 1, 2, 3, 4, 10, 11);
console.log(result);
