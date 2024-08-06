"use strict";

// const restaurant = {
//   name: "Classio Italiano",
//   location: "Via Angelo Tavant 23, Firenzo, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Foccaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order: function (starterindex, mainIndex) {
//     return [this.starterMenu[starterindex], this.mainMenu[mainIndex]];
//   },
// };

// array destructuring
// const arr = ["a", "b", "c"];
// const [a, b, c] = arr;
// console.log(a, b, c);

// let [mainCourse, secondary] = restaurant.mainMenu;
// console.log(mainCourse, secondary);
// create a temporary array and switching variables
// const temp = mainCourse
// mainCourse = secondary
// secondary = temp;
// or
// [mainCourse, secondary] = [secondary, mainCourse];

// console.log(`new outcome:  ${mainCourse} ${secondary}`);
// // receive 2 return value from a function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// nested destructuring
// const arr1 = [2, 4, [5, 6]];
// console.log(arr1[2][0]);
// const [i, , [j, k]] = arr1;
// console.log(i, j, k);

// destructuring object
const restaurant = {
  name: "Classio Italiano",
  location: "Via Angelo Tavant 23, Firenzo, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thur: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterindex, mainIndex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "20:00",
    address,
    mainIndex = 1,
    starterIndex = 0,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} andja ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`);
  },
};



// const ingredients = [prompt("Let's make pasta! ingredient 1?"), prompt("Let's make pasta! ingredient 2?"), prompt("Let's make pasta! ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients)

const newRestaurantCopy={...restaurant}
newRestaurantCopy.name = "Clare Meals"
console.log(restaurant.name);
console.log(newRestaurantCopy.name);


const newArray = [...restaurant.mainMenu, "Gnocci"];
console.log(newArray);
// the spread operator does 2 things - copy array and joins 2 array

const copyArray = [...restaurant.mainMenu];
const joinArray = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log("copy", copyArray);
console.log("Join", joinArray);

// spread operators works on all iterables.
// iterables are array, strings, set, and maps. NOT object
const ab = "Clare";
let cd = [...ab, " ", "S."];
console.log(cd);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Val del Sol, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Lagos, Nigeria",
// });

// let text = "";
// const {
//   thur: { open, close },
//   fri,
//   sat,
// } = restaurant.openingHours;
// console.log(open);
// console.log(thur);
// for(let x in thur){
//   text += `${x}: ${thur[x]}<br/>`
// }
// document.write(text)

// const num = [1,2,3,4,5,6,7]
// const alpha = ["a","b", "c", "d", "e", "f", "g"]

// const [a,b] = num
// const newArrya = [...num, ...alpha]
// console.log(newArrya);
// document.getElementById("demo").innerHTML = newArrya.join(",  ")

// function sumMultiply(a,b){
//   return [a*b, a+b]
// }

// const [multiply, sum, division="No division"] = sumMultiply(4,5)
// console.log(division);

// const personOne = {
//   name:"Sally",
//   age:32,
//   address:{
//     city:"Somewhere",
//     state:"Lagos"
//   },
//   career:{
//     position:"Software Engineer",
//     salary:"$1,000"
//   }
// }

// const personTwo = {
//   age:32,
//   favouriteFood:"Rice $ Stew"
// }

// const {name:firstName, age, address:{city}, ...rest} = personOne
// console.log(city);

// const newObject = {...personOne, ...personTwo}
// console.log(newObject);
// let text = " "
// for(let i in newObject){
//   text += `${i}:${newObject[i]} `
// }
// document.getElementById("demo").innerHTML = text

// function outCome({name, age, favouriteFood="beans"}){
//   return `${name} ${age} ${favouriteFood}`
// }
// console.log(outCome(personOne));

// const numbers = [65, 44, 12, 4];
// let sum = 0
// let sum = []
// numbers.forEach(myFunction)
// numbers.forEach(myFunction1)

// function myFunction(item){
//   sum += item
// }
// console.log(sum);

// function myFunction1(item, index, arr){
//   arr[index] = item *10
//   sum[index] = item *10
// }
// console.log(sum);
// console.log(numbers);

// const numbers1 = [45, 4, 9, 16, 25];
// let text = []
// numbers1.map(myFunction)
// function myFunction(value, index, array){
//   text[index] = value*2
// }
// console.log(text);
