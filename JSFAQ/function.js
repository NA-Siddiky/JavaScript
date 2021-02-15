// Using function indifferent way -1/

function addingOddNumber(numbers) {
    // var blank_array = [];

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (num % 2 == 0) {
            console.log(num, ": is even number");
        }
        else {
            // blank_array = num;
            console.log(num, ": is odd number")
        }

    }
}

var numbers = [1, 2, 3, 4, 5, 6, 7];
var result = addingOddNumber(numbers);
// console.log(result);


Using function indifferent way -2/
function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, ": is even number");
    }
    else {
        console.log(num * 0, ": is add number")
    }
}


nums = [6, 7, 8, 9,]
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num) // using inherate function /
}

friends_age = [13, 17, 30, 18];
for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    evenify(age); // using inherate function /
}



// // Using function indifferent way -3/
// function evenify(num) {

//     if (num % 2 == 0) {
//         console.log(num, ": is even number");
//     }
//     else {
//         console.log(num * 0, ": is add number")
//     }
// }

// function evenify_all(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         evenify(num) // using inherate function /
//     }
// }

// nums = [6, 7, 8, 9,]
// evenify_all(nums);

// friends_age = [2, 13, 17, 30, 18];
// evenify_all(friends_age);



// // Using function indifferent way -4/
// function evenify(num) {
//     var result;
//     if (num % 2 == 0) {
//         return num;
//     }
//     else {
//         // console.log(num * 2, ": is add number")
//         return num * 2;
//     }
//     return result;
// }

// var result = evenify(13);
// var square = result * result;
// // console.log('result', result);
// console.log('square', square);

// function evenify_all(nums) {
//     var even_array = [];
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         var result = evenify(num) // using inherate function /
//         even_array.push(result);
//     }
//     return even_array;
// }


// nums = [6, 7, 8, 9,]
// // evenify_all(nums);
// var nums_even = evenify_all(nums);
// console.log(nums_even)

// friends_age = [2, 13, 17, 30, 18];
// // evenify_all(friends_age);