// system 1

// var factorial = 1;
// for (var i = 1; i<= 50; i++){
//     fact = fact * i
//     console.log(i, factorial);
// }

// system 2
// function factorial(n) {
//     var fact = 1;
//     for (var i = 1; i <= n; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// var reasult = factorial(10);
// console.log(reasult);


// system 3
// var i = 1;
// var fact = 1;

// while (i <= 10) {
//     fact = fact * i;
//     // console.log(i, factorial);
//     i++;
// }
// console.log(fact);



// system 4
function factorial(n) {
    var i = 1;
    var fact = 1;
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var reasult = fact(5);
console.log(reasult);

