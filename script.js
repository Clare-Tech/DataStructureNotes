"use strict";

// const restaurant1 = {
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

// let [mainCourse, secondary] = restaurant1.mainMenu;
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
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const days = Object.values(openingHours);
const entries = Object.entries(openingHours);
let openStr = `we are opened on ${days.length}: `;

// for(const [day, {open, close}] of entries){
//   console.log(`On ${day}, we open at ${open} and close at ${close}`);
// }
for (let [key, { open, close }] of entries) {
  console.log(`on ${key}, we open at ${open} and close at ${close}`);
}

const data = {
  open: 12,
  close: 22,
};

// for(let day of days){
//   openStr += `${day}, `
// }
// for(let [i,j] of entries){
//   console.log(`Result is ${i, j}`);

//   for(let [k,l] of Object.entries(j)){
//     console.log(i + ": " + k + "-" + l);
//     document.getElementById("demo").innerHTML=`${i}: ${k}${l}`

//   }

// console.log(openStr);

// document.getElementById("demo").innerHTML=openStr
// for(const day of weekdays){
//   const open = openingHours[day] ?.open ??  "closed"
//   console.log(`on ${day}. we open at ${open}`);

// }
// console.log(openingHours);

// const restaurant = {
//   name: "Classio Italiano",
//   location: "Via Angelo Tavant 23, Firenzo, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Foccaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

// ES6 enhanced object literal
// openingHours,

// new way of writing method
//   order(starterindex, mainIndex) {
//     return [this.starterMenu[starterindex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     time = "20:00",
//     address,
//     mainIndex = 1,
//     starterIndex = 0,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} andja ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`
//     );
//   },
//   orderPizza: function(mainIngredient, ...otherIngredient){
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   }
// };

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu);

// for/of loop
// let text = ""

// for(let [key, value] of menu.entries()){
// text += `${values[0] + 1} : ${values[1]} <br/>`
// text += `${key + 1} : ${value} <br/>`
// }
// for(let values of restaurant.mainMenu){
//   text += `${values} <br/>`
// }
// const cars = ["BMW", "Volvo", "Mini"]
// let text = ""
// for(const x of cars){

//   text += `${x} <br/>`
// }
// document.getElementById("demo").innerHTML = text
// const rest1 = {
//   name:"Capri",
//   numGuests:20
// }
// const rest2={
//   name:"La piazza",
//   owner:"Giovanni Rossi"
// }
// rest1.numGuests =  rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10
// rest1.numGuests ||= 10
// rest2.numGuests ||=10

// console.log(rest1);
// console.log(rest2)
// const ingredients = [prompt("Let's make pasta! ingredient 1?"), prompt("Let's make pasta! ingredient 2?"), prompt("Let's make pasta! ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients)

// const newRestaurantCopy={...restaurant}
// newRestaurantCopy.name = "Clare Meals"
// console.log(restaurant.name);
// console.log(newRestaurantCopy.name);

// const newArray = [...restaurant.mainMenu, "Gnocci"];
// console.log(newArray);
// the spread operator does 2 things - copy array and joins 2 array

// const copyArray = [...restaurant.mainMenu];
// const joinArray = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log("copy", copyArray);
// console.log("Join", joinArray);

// spread operators works on all iterables.
// iterables are array, strings, set, and maps. NOT object
// const ab = "Clare";
// let cd = [...ab, " ", "S."];
// console.log(cd);

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

// rest operator because the dots are in the lefthand side. rest is for packing while spread is for unpacking

// const [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
// console.log(rest);

// const [pizza, , Risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, Risotto, otherFoods);

// const {sat, ...weekdays} = {...restaurant.openingHours}
// console.log(sat);

// let sum = 0;
// function addFunction(...number) {
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   document.getElementById("demo").innerHTML = sum;
//   console.log(sum);
// }
// addFunction(2, 3, 4);
// addFunction(5, 6);
// addFunction(7, 8, 9, 1);
// const x = [23,5,7]
// addFunction(...x) //we unpack the array

// restaurant.orderPizza("Mushroom", "onion", "Olives", "Spinach")

// javascript features that almost nobody knows about

// function calculate(price, taxes, description){
//   const total = price * (1+taxes)
//   console.log(`${description} with Tax: $${total}`);

// }

// calculate(100, 0.07, "My Item")

// SET
// const a = ["pizza", "pizza", "mango", "orange", "pineapple", "pineapple"]
// const val = new Set(["pizza", "pizza", "mango", "orange", "pineapple", "pineapple"])
// console.log(val);
// console.log(val.has("bread"));
// console.log(val.size);
// console.log(val.add("Garlic bread"));

// const unpack = [... new Set(a)]
// console.log(unpack);

// Map() key:value pair
const restaurant2 = new Map();
restaurant2.set("name", ["Mike", "Jane", "Divine"]);
restaurant2.set(true, "we are opened");
restaurant2.set(false, "We are closed");
restaurant2.set("open", 11);
restaurant2.set("close", 23);
const arr = [1, 2, 3];
restaurant2.set(arr, "test");
restaurant2.set(document.querySelector("h1"), "heading");

// to read a data from a Map(), we use a get()
console.log(restaurant2.get("name"));
console.log(restaurant2.get("open"));
console.log(restaurant2);
console.log(restaurant2.get(arr));

const newMap = new Map([
  ["question", "what is the best programming langauge?"],
  [1, "Javascript"],
  [2, "Java"],
  [3, "C#"],
  ["correct", 1],
  [true, "correct"],
  [false, "Try again"],
]);
const text = "";

for (let [key, value] of newMap) {
  if (typeof key === "number") {
    console.log(`The ${key} is ${value}`);
  }
}
// const answer = Number(prompt(["You anwer is"]))
// answer === newMap.get("correct") ?  console.log(newMap.get(true)) :  console.log(newMap.get(false));;
// if(answer === 1){
  // console.log(newMap.get(true));
  
// }
// console.log(newMap);

// converting an object into a map using Objects.map(object)
const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

// converting a Map() into an array is by unpacking it
console.log([...newMap]);
console.log(typeof newMap);
console.log([...newMap.entries()]);
console.log([...newMap.keys()]);
console.log([...newMap.values()]);






