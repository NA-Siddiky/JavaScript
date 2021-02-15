var man_array = [12, 55, 65, "blue"];

var man_object = {
    age: 12,
    weight: 55,
    hight: 65,
    color: "Neavyblue"
}
// system 1
var age = man_object.age;
console.log(age);
// system 2
var age = man_object["age"];
console.log(age);
// system 3
var lookingFor = "age";
var age = man_object[lookingFor];
console.log(age);

// push any vslue
man_object[lookingFor] = 95;

console.log(man_object.age);
console.log(man_object["age"]);
console.log(man_object[lookingFor]);

