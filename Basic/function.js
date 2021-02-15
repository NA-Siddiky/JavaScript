// function sayLoveYou(){
//     console.log('jan o baby');
//     console.log('baby');
// }

// sayLoveYou();
// var date = 14;
// var place = "Resturent";
// console.log(place)
// sayLoveYou();
// var hangOut = "TSC";
// console.log(hangOut);
// sayLoveYou();


/*function practice*/
// function doubleIt(num){
//     var resust = num * 2;
//     return resust;
// }

// var first = doubleIt(5);
// var secound = doubleIt(50);
// var total = first + secound;
// console.log(total);

// function add(num1, num2){
//     var resust = num1 + num2;
//     return resust;    
// }
// var sum = add(15, 17);
// console.log(sum);

// var marks = [89, 56, 89, 22, 33];

// for(var i = 0; i<= marks.length; i++){
//     var element = marks[i];

//     console.log(element);
// }

// function add(number1, number2){
//     var total = number1 + number2;
//     return total;
// }

// var resust1 = add(65, 57);
// console.log(resust1);


// var adam = "adam is best"
// var kodom = 'testing'

// var result2 = add (134, 33);
// console.log(result2);


function largestNumber(numbers) {
    var larger = numbers[0];
    var Input = "Invalid input";
    var string = [];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        // console.log(typeof element);
        if (typeof element == "number") {
            if (element > larger) {
                larger = element;
            }
        }
        else {
            string.push(element);
            console.log("It's", typeof element);
            return Input;
        }
    }
    return larger;
}

var numbers = [1, 2, 33, 4, 55, 6, 7, 88, 9, 3, 5, 77, 99]
var output = largestNumber(numbers);
console.log(output);




