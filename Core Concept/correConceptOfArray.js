const numbers =[2,5,7,8,6]
// const friends = [ "rafiq", "shafiq", "Borkat"]
const products = [
  {id:1, name: 'laptop', price:500},
  {id:2, name: 'mobile', price:400},
  {id:3, name: 'watch', price:300},
  {id:4, name: 'tab', price:200},
]
// console.log(numbers)
// console.log(friends)
// console.log(products)


//map //
const ids = products.map( element => element.id)
// console.log(ids)

const names = products.map( element => element.name)
// console.log(names)

const prices = products.map( element => element.price)
// console.log(prices)

const prices2 = products.map( element => {
  element.price
  return element.price
})
// console.log(prices2)


//filter//
const cheaper = products.filter(element => element.price < 400);
// console.log(cheaper);
//filter remaning//(remove an item using filter)//
const remainingItem =products.filter(element => element.price != 300);
// console.log(remainingItem);


//find//
const findingWatch = products.find(element => element.name === 'watch');
// console.log(findingWatch);


//forEach //
// products.forEach(element => console.log(element.id))


// //regular for loop//
// for(i=0, i < products.length, i++;){
//   console.log(i)
// }


//reduce //

//includes//

//push//
// const friends = [ "rafiq", "shafiq", "Borkat"]
// friends.push("Kazi");
// console.log(friends)

//pop//
const friends = [ "rafiq", "shafiq", "Borkat"]
friends.pop("rafiq");
console.log(friends);

//length//

//indexOf//
