function explain_callback(name, age, task) {

    console.log("Hello", name);
    console.log('your age', age);
    // washHands(); // function from another place /
    // takeShower(); // function from another place /
    //consol.log(task); or /
    task();//call task from line-21,22 /
}

// another functions for task /
function washHands() {
    console.log('wash hand with soap')
}
function takeShower() {
    console.log('take Shower');
}
function scrollFacebook() {
    console.log('Scrolling Facebook');
}



// explain_callback("Sogir - 1", 17);
// explain_callback("Jogir - 2", 13);
explain_callback("Sogir - 1", 17, washHands);  // using or call function as task /
explain_callback("Jogir - 2", 13, takeShower);
explain_callback("Mugir - 3", 21, scrollFacebook);