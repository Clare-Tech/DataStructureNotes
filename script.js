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
  orderDelivery:function({time="20:00", address, mainIndex=1, starterIndex=0}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Val del Sol, 21",
  mainIndex: 2,
  starterIndex:2
})

restaurant.orderDelivery({
  time: "22:30",
  address:"Lagos, Nigeria"
})

let text = ""
const {thur:{open, close}, fri, sat} = restaurant.openingHours
console.log(open);
// console.log(thur);
// for(let x in thur){
//   text += `${x}: ${thur[x]}<br/>`
// }
// document.write(text)