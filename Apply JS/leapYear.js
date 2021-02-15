// system1
// const year = 2023;
// let reminder = year % 4;

// // console.log(reminder === 0);

// if(reminder == 0){
//     console.log("It's Leap Year");
// }
// else{
//     console.log("Not a Leap Year");
// }

// system2

function isLeapYear(year) {
    const checker = [4, 100, 400];
    const reminder1 = year % checker[0];
    const reminder2 = year % checker[1];
    const reminder3 = year % checker[2];

    if (reminder1 == 0 && reminder2 != 0) {
        return true;
    }
    else if (reminder3 == 0) {
        return true;
    }
    // if (((year % 4 == 0) && (year % 100 != 0))) {
    //     return true;
    // }
    // else if(year % 400 == 0) {
    //     return true;
    // }
    else {
        return false;
    }
}
let checkYear = isLeapYear(1700);
console.log(checkYear);


