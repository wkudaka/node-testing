"use strict";

//let stuff....
var x = 10;

if(x) {
  let x = 4;
}

console.log(x);


//const stuff
const birthYear = 1985;
var age = 2016 - 1985;
console.log(age);


//template strings

function createEmail(firstName, purchasePrice){
  var shipping = 5.95;

  console.log(
    `Hi ${firstName}, Thanks for buying from us!
      Total: $${purchasePrice}
      Shipping: $${shipping}
      Grand Total: $${purchasePrice+shipping}
    `);
}

createEmail('SOMENAME :D', 100);

//spread operators
var cats = ["Tabby", "Siamese", "Persian"];
var dogs = ["Golden Retriever", "Pug", "Schauzer"];

var animals = ["Whale", ...cats ,"Giraffe",  ...dogs, "Snake", "Coyote"];
console.log(animals);


//default function parameters...

function add(x=5,y=7){
  console.log(x+y);
}

add();

function haveFun(activityName="hiking", time=3){
  console.log(`Today I will go ${activityName} for ${time} hours.`);
}

haveFun("biking");

//enchancing object literals
var cat = {
  meow(times){
    console.log("meow".repeat(times));
  },
  purr(times){
    console.log("purr".repeat(times));
  },
  snore(times){
    console.log("snore".repeat(times));
  }
}

cat.meow(3);
cat.purr(4);
cat.snore(2);

//arrow functions

var studentList = (students) => console.log(students);

studentList(["Joe", "Cindy", "Jeane"]);


//arrow functions and the this scope
var person = {
  first:"Doug",
  actions: ['bike', 'hike', 'ski', 'surf'],
  printAction() {
    this.actions.forEach( (action) => {
      var str = this.first + " likes to " + action;
      console.log(str);
    })
  }
}

person.printAction();


//destructing assigment
var [first,,, fourth,] = ["Spokane", "Boston", "Los Angeles", "Seatle", "Portland"];

console.log(first, fourth);


var {title, price} = {
  title: "Reuben",
  price: 7,
  description: "OSADIoajdoi asjd",
  ingredients: ['bread', 'corned beef', 'dressing', 'sauerkraut', 'cheese']
}

console.log(title, price);


var vacation = {
  destination: "Chile",
  travelers: 2,
  activity: "skiing",
  cost: 4000
}


function vacationMarketing({destination, activity}) {
  return `Come to ${destination} and do some ${activity}`;
}

console.log(vacationMarketing(vacation));


//generators
function* director(){
  yield 'Three';
  yield 'Two';
  yield 'One';
  yield 'Action';
}

var action = director();

console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);


function* eachItem(arr){
  for (var i = 0; i< arr.length; i++) {
    yield arr[i];
  }
}

var letters = eachItem(["a", "b", "c", "d", "e", "f", "g"]);

var abcs = setInterval(function(){
  var letter = letters.next();

  if(letter.done){
    clearInterval(abcs);
    console.log("Now i know my ABC's");
  }else{
    console.log(letter);
  }
}, 500);


//es6 class syntax
class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  describeYourself(){
    console.log(`I am a ${this.description} with ${this.wheels} wheels`);
  }
}

var coolSkiVan = new Vehicle("cool ski van", 4);
coolSkiVan.describeYourself();

//class inheritance
class SemiTruck extends Vehicle {
  constructor(){
    super("semi truck", 10)
  }
}

var groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();
