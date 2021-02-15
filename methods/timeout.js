function doSomething() {
    console.log(111);
}
console.log(222);

// setTimeout(doSomething, 2000);

// setTimeout(function () {
//     console.log("Waiting");
// }, 3000)

// setTimeout(() => {
//     console.log("see you later");
// }, 4000)


setInterval(function () {
    console.log("Doing Interval");
}, 1000)


console.log(333);
console.log(333);
console.log(333);
