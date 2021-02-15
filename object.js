var data = [];

var student = {id:121, phone: "12", name:"Abir"};
var student2 = {id:122, phone: "01453", name:"sid"};

data.push(student, student2);
for(var i =0; i<data.length; i++){
    var element = data[i];
    console.log(element.phone);
}
// console.log(data);


// var phoneNoAdd = "phoneNoAdd";
// var phoneNo1 = "phone";
// var phoneNo2 = student.phone;
// var phoneNo3 = student["phone"];


// var phoneNo4 = student[phoneNo1];
// var phoneNo5 = student[phoneNoAdd];
// // update phone
// student2.phone = 544434;
// student2["phone"] = 6998989;
// student2[phoneNo1] = 800008;
// student2[phoneNoAdd] = 78787878;

// console.log(student);
// console.log(student2);
// console.log(phoneNo2);