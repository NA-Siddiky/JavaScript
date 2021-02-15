// 1,1,2,3,5,8,13.....

function fibonacciIterative(num) {
    var fibo = [1, 1];
    for (var i = 2; i <= num; i++) {
        var nextFibo = fibo[i - 1] + fibo[i - 2];
        fibo.push(nextFibo);
    }
    return fibo;
}
var result = fibonacciIterative(5);
console.log(result);


function fibonacciRecursive(num) {
    // stoping condation
    if (num == 0) {
        return [1];
    }
    if (num == 1) {
        return [1, 1];
    }
    // recursion call

    var fibo = fibonacciRecursive(num - 1);
    var nextFibo = fibo[num - 1] + fibo[num - 2];
    fibo.push(nextFibo);
    return fibo;
}
var result = fibonacciRecursive(5);
console.log(result);
