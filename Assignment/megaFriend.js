// function megaFriend(names) {
//     var count = 0;
//     var longest_name;
//     for (var i = 0; i < names.length; i++) {
//         if (names[i].length > count) {
//             var count = names[i].length;
//             longest_name = names[i];
//         }
//     }
//     return longest_name;                              // Return the largest name of the friend /
// }

// var names = ["anik", "tuhin", "sid", "Siddiky", "Abduljobber"];
// var mega = megaFriend(names)
// console.log(mega);



function largestNames(names) {
    var larger = [];
    var numbers = [];
    var count = 0;
    var input = "Invalid input";

    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (typeof element == "string") {
            if (element.length > count) {
                count = element.length;
                larger = element;
            }
        }
        else {
            console.log("It's", typeof element);
            numbers.push(element);
            return input;
        }
    }
    return larger;
}

var names = ["s", "siddiky", "N", "Nurealom", "r", 1, 5, 6, "Abdul", "Jobbar"];
var output = largestNames(names);
console.log(output);
