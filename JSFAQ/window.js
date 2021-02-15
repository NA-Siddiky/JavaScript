const globalName = "Kuddus";

function add(num1, num2) {
    // result = num1 + num2;
    // window.result = num1 + num2;
    let result = num1 + num2;

    console.log("using from Inside", result);
    console.log("I am inside", globalName);
    function double(num) {
        return num * 2;
    }
    let total = double(result)
    return total;
}

console.log("I am Outside", globalName);
const sum = add(22, 55);
console.log(sum);
// console.log("using from Outside", result); //cant call inside property from outside/