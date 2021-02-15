// var depth = 22;
// var animal = 0;


function animalCounter(depth) {

    if (depth <= 10) {
        animal = depth * 50;
    } else if (depth <= 20) {
        var first_part = 10 * 50;
        var remaining = depth - 10;

        var secound_part = remaining * 100;
        var remaining = first_part + secound_part;
    } else {
        var first_part = 10 * 50;
        var secound_part = 10 * 100;

        var remaining = depth - 20;
        var third_part = remaining * 300;

        animal = first_part + secound_part + third_part;

    }
    return animal;
}
var count = animalCounter(25);
console.log(count);