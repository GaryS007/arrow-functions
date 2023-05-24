
// *************************
// !!! Template literals - Use backticks instead of single or double quotes. Then put any characters you win inbetween them, you can even use variables like ${name} etc. 
// Great for creating HTML

let name = "Bilbo Baggins";
let home = "Bag End";

console.log(`${name} lives at ${home}`);

// HTML Example

let fourthItem = 'Item 4';
let myHtml = `
  <ol class="item-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>${fourthItem}</li>
  </ol>
`;

// *************************

// !!! String Concatenation - Adding variables to a string

let myVar = 'a variable!'
let myString = 'This string contains ' + myVar;

console.log(myString);  // This string contains a variable!

// You can also use this to append HTML or create a list in HTML as follows

let fruits = ['apple', 'orange', 'banana'];
let myHtmlConcatenation = '<ol>';

for (let i = 0; i < fruits.length; i++) {
    myHtmlConcatenation = myHtmlConcatenation + '<li>' + fruits[i] + '</li>';
}
myHtmlConcatenation += '</ol>';

// myHtmlConcatenation is now:
<ol>
  <li>apple</li>
  <li>orange</li>
  <li>banana</li>
</ol>

// An easier way to do this is with template literals (or string interpolation)

// let fruits = ['apple', 'orange', 'banana'];
// let myHtml = '<ol>';

// for (let i = 0; i < fruits.length; i++) {
//   myHtml += `<li>${fruits[i]}</li>`;
// }
// myHtml += '</ol>';

// *************************

// !!! String Methods - You can call on various methods to manipulate strings, numbers, arrays and so on. Example to follow

let title = "This is the Title of a Book";
let lowerTitle = title.toLowerCase();
console.log(lowerTitle);  // this is the title of a book or you can use toUpperCase()

// *************************

// !!! Determining the Data Type - You can find the data type, is it a string? float? integer? boolean? And execute code based on the data type.

typeof 1;                        // "number"
typeof 'Hello world!';           // "string"
typeof true;                     // "boolean"
typeof ['a', 'b', 'c'];          // "object"
typeof {name: 'John', age: 30};  // "object"

// or use it as a function and place data inside parentheses.

typeof(1);                        // "number"
typeof('Hello world!');           // "string"
typeof(true);                     // "boolean"
typeof(['a', 'b', 'c']);          // "object"
typeof({name: 'John', age: 30});  // "object"

// *************************

// !!!! Type Coercion - Javascript will automatically convert data type to another since it's a weakly typed language. Example below.

console.log(1 + "1");  // "11"

// This is why it's important to use === instead of == when checking equality. 

// *************************

// !!! Assignment Operators - Assignment operators in JavaScript are used to assign or reassign values to a variable. Examples below.

let x = 10; 

x += 1;   // 10 + 1 = 11
x -= 1;   // 10 - 1 = 9
x *= 2;   // 10 * 2 = 20
x /= 2;   // 10 / 2 = 5
x %= 3;   // 10 % 3 = 1 (returns the remainder of 10/3 = 1)
x **= 3;  // 10 ** 3 = 1000 

// *************************

// !!! PEMDAS 

// PE: Parentheses and exponents
// MD: Multiplication and Division
// AS: Addition and subtraction

// let x = 2;
// let y = 3;
// let z = 4;

// console.log(x + y * z);  // 2 + 12 = 14
// console.log((x+y) * z);  // 5 * 4 = 20

// *************************

// !!! Incrementing and Decrementing - How to increment numbers

// Postfixing:

// let x = 3;
// y = x++;

// // y = 3
// // x = 4
// Prefixing:

// let x = 3;
// y = ++x;

// // y = 4
// // x = 4

// *************************

// !!! Comparing Values With Comparison Operators

let canVote = false;
let age = 19;

if (age >= 18) {
  canVote = true;
}
console.log(canVote);  // true

// There are more operators to use, like !== and more, google them!

// *************************

// !!! Determining Truth with Logical Operators !!!

// && (AND): returns true only if all operands are true
// || (OR): returns true if any of the operands are true
// ! (NOT): negates the operand it's used on

let a = true;
let b = true;
let c = false;
let d = false;

a && b && c && d         // Operators are executed left to right
a || b && c || d         // b && c is evaluated first
(a || b) && (c || d)     // a || b is evaluated, then c || d, then the &&
!(a || b) && (c || d)    // same as above, but (a || b) is negated before the && is evaluated

// *************************

// !!! If/Else Statements - Execute code based on whether something is true or false. If xyz is true { execute this code } else : do this code instead.

// This just means if true do this, if false do that.

if (condition) {
  // code if true
} else {
  // code if false
}

// If statements have four parts:

// The test: This is the "if" part, it tests whether the condition is true or not
// The condition: The boolean value that is actually being tested to determine if it's true or false
// The code if true: what will be executed if the condition is true
// The code if false: what will be executed if the condition is false

let userLoggedIn = false;
if (userLoggedIn) {
  alert('Welcome! You have logged in.');
} else {
  alert('Please log in.');
}

// *************************

// !!! Ternary Conditionals - This is mainly used to do a 1 small if statement, not for large blocks of code. Simple 1 line ternary expression.

// Standard conditional statement:

if (condition) {
  // code if true
} else {
  // code if false
}
// Equivalent ternary expression:

// condition ? code if true : code if false

// Another example below.

// let memberType = 'basic';
// let price = memberType === 'basic' ? 5 : 10;

// vs

// let memberType = 'basic';
// let price;

// if (memberType === 'basic') {
//   price = 5;
// } else {
//   price = 10;
// }

// *************************

// !!! Multiple Conditions (If/Else If/Else)

let memberType = 'elite';
let price;

if (memberType === 'basic') {
  price = 5;
} else if (memberType === 'pro') {
  price = 10;
} else if (memberType === 'elite') {
  price = 20;
} else {
  price = 0;
}
console.log(price);  // 20

// *************************

// !!! Switch Case Statements - Similar to If/Else statements but without the excessive use of Else If which can look messy, you can use this instead.

switch (expression) {
  case 'value1':
    // code block 1
    break;
  case 'value2':
    // code block 2
    break;
  case 'valuen':
    // code block n
    break;
  default:
    // default result
}

let day;
let dayNumber = 2;

switch (dayNumber) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default:
    day = 'Invalid day number';
}

console.log(day);  // Tuesday

// Nested If statement

let user = true;
let emailVerified = false;

if (user) {
    if (emailVerified) {
        console.log("Welcome to our web-site");
    } else {
        console.log("Please verify your email");
    }
} else { 
    console.log("You need to be a user to visit this page");
}

// ************************* 

// !!! For Loops - A for loop repeats the same operation or block of code until a specified condition is false

let fruit = ['apples', 'oranges', 'bananas', 'cherries'];
let numberOfFruits = fruit.length;

for (let i = 0; i < numberOfFruits; i++) {
  console.log(fruit[i] + ' are delicious!');
}

console.log('I love fruit!');

// !!! While Loops - A while loop will repeat the operation or block of code indefinitely until a specified condition is false.

// let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
// let numberOfFruits = fruits.length;

// let i = 0;
// while (i < numberOfFruits) {
//   console.log(fruits[i] + ' are delicious!');
//   i++;
// }

// console.log('I love fruit!');

// ** a while loop sometimes does not execute the code because the condition is never evaluated as true. If this is the case, you can use a Do... while loop. 
// See 2 examples below.

// let i = 10;
// while (i < 10) {
//   console.log('checking i...');
//   console.log('i is', i);
// }
// console.log('Loop complete');

// let i = 10;
// do {
//   console.log('checking i...');
//   console.log('i is', i);
// } while (i < 10);
// console.log('Loop complete');

// ************************* 

// !!! Arrays 

// Declare an array using square brackets

let myArray = [value1, value2, value3]; 

// Each item in the array is known as an Element

// Arrays can have as many values as you like and the values can be of any data type.

// Arrays don't have keys to access their elements like Dictionaries do.

// ************************* 

// !!! Array Indexing - You can access an individual array item (or element) by using a specific number.

let cars = ['saab', 'volvo', 'ford'];
console.log(cars[0]);  // 'saab'
console.log(cars[1]);  // 'volvo'
console.log(cars[2]);  // 'ford'

// let cars = ['saab', 'volvo', 'ford'];
// for (let car = 0; car < 3; car++) {
//   console.log(cars[car]);
// }

// When you don't know the length of an array, use the .length property

let lotsOfElements = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(lotsOfElements.length);

for (let i = 0; i < lotsOfElements.length; i++) {
  console.log(lotsOfElements[i]);
}

// !!! Array Methods - There are a lot of methods, research them!

// Popping and pushing elements
// Shifting and unshifting elements
// Deleting and splicing elements
// Changing the values of specific elements
// Slicing, sorting and merging
// Testing whether an array includes an element
// Mapping and reducing

// Popping and Pushing elements:

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// let lastItem = fruits.pop();

// console.log(lastItem);
// console.log(fruits);

// let newLength = fruits.push('mangoes');
// console.log(newLength);
// console.log(fruits);

// ************************* 

// !!! Objects / Dictionaries

let car = {
  color: 'white',
  numberOfSeats: 5,
  price: 20000
}

// In the above example the properties are color/numberOfSeats/price and the values are beside the : 'white', 5, 20000.

// If you wanted to console.log the price, you would do the following.

console.log(car.price) // 20000

// !!! Getting & Setting Object properties

// Just like Arrays you can update/read/delete any element, you can do the same with Objects/Dictionaries 

// Arrays use Indexes to identify their elements. In Objects/Dictionaries they are identifies by the property names.

// myObect['someProperty'] or what is now preferred - myObject.someProperty

let person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
  location: 'USA'
}

// There are four things we can do with this person object:

// Read its properties
// Create new properties
// Update its existing properties
// Delete its properties

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// };
// console.log(person['firstName']);  // 'John'
// console.log(person.lastName);  // 'Smith'

// To give an object a new property, you can use the same notation, but set the value at the same time:

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// };
// person['bestFriend'] = 'Mike';
// console.log(person['bestFriend']);  // 'Mike'

// person.wife = 'Mary';
// console.log(person.wife);  // 'Mary'

// console.log(person);

// To update an existing property you can use the same syntax as creating a new value; just do it on an existing property to overwrite it:

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// };
// person['age'] = 31;
// console.log(person['age']);  // 31

// person.location = 'Spain';
// console.log(person.location);  // 'Spain'

// Finally, to delete an object property you can use the delete operator:

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// };
// delete person['lastName'];
// delete person.age;
// console.log(person);

let data = {
  firstName: "Arthur",
  lastName: "Dent",
  species: "Human"
};

let firstName = data['firstName'];
console.log(firstName);

let species = data.species;
console.log(species);

data.age = 42;

console.log(data);

// *****************

// !!! Object Methods

// 1 - Static Methods - Common ones are Object.keys() and Object.values() which return the passed objects proprties and values.

// 2 - Instance Methods - Object.instance.hasOwnProperty(), which returns whether an object has a property in its own definition (rather than inheriting it from another object)
//  and Object.instance.toString(), which returns a string representation of the object.

// 3 - Methods you create - are instance methods that you yourself have added as properties on the object. 

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
// };

// console.log(Object.keys(car));
// // returns ["location", "ignition", "fueled"]

// // Unsupported on JavaScript Tutor
// console.log(Object.values(car));
// // returns ["garage", "off", true]

// console.log(Object.entries(car));  
// // returns [Array(2), Array(2), Array(2)]
// // Expanded view of the three arrays:
// // 0: (2) ["location", "garage"]
// // 1: (2) ["ignition", "off"]
// // 2: (2) ["fueled", true]

// Now let's find out if the car has a specific property by using the instance method hasOwnProperty();

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
// };

// console.log(car.hasOwnProperty('ignition'));  // true
// console.log(car.hasOwnProperty('drive'));  // false

// This is a custom method by creating a property (start) which has a function() as a value.

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
//   start: function() {
//     this.ignition = 'on';
//   }
// };

// console.log(car.ignition);
// car.start();
// console.log(car.ignition);

// ***************************

// !!! The 'this' keyword - This keyword is used usually in 2 ways, see below.

// In a method, this refers to the object that owns the method. If the method isn't owned by any object, then this refers to the global object.
// In an event (like when a user clicks on something), this refers to the element that received the event (e.g. the thing they clicked on).

let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
  start: function() {
    this.ignition = 'on';
  }
};

console.log(car.ignition);
car.start();
console.log(car.ignition);

// ***********************

// !!! Iterating Data Structures 

// Accessing / Iterating through an array using a for loop

let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];

for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}

// There are 3 ways to use a for loop in this way, 1 of which is above. 2 below.

let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
for (let i of food) {
  console.log(i);
} // Using 'of' achieves the same as the above example but it's less verbose. 

let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
for (let i in food) {
  console.log('index', i, 'is', food[i]);
} // Using for... in loop - loop iterates over the array's indices (like the standard for loop) rather than its values (like the for...of loop):

// If working with Objects you can use the for...in loop too.

let petNames = {
  dog: 'Fido',
  cat: 'Max',
  fish: 'Bubbles',
  python: 'Mr. Slithers',
}

for (let i in petNames){
  console.log(petNames[i], 'is a', i);
}

// Nested Data Structures - You can go crazy with nested data structures mixing Objects/Arrays together. See below example to see how to access data when it's complex.

let company = {
  name: 'Apple, Inc',
  founded: 1976,
  financials: {
    incomeStatement: {
      years: [2020, 2019, 2018],
      revenue: [125, 120, 115],
      costs: [100, 100, 100],
      profit: [25, 20, 15]
    },
    balanceSheet: {
      years: [2020, 2019, 2018],
      assets: [200, 190, 180],
      liabilties: [100, 95, 90],
      equity: [100, 95, 90]
    },
    cashFlow: {
      years: [2020, 2019, 2018],
      operating: [75, 65, 55],
      investing: [22, 20, 18],
      financing: [-94, -80, -75]    
    }
  },
  competitors: ['Microsoft', 'Amazon', 'Samsung']
}

console.log(company.name);
console.log(company.competitors);
console.log(company.competitors[0]);
console.log(company.financials.incomeStatement.years);
console.log(company.financials.incomeStatement.revenue[0]);

// ****************

// !!! FUNCTIONS - Taking Parameters & returning results - 'addTwo(3, 5);' calls the function and returns num1 + num2 to user.

function addTwo(num1, num2) {
  return num1 + num2;
}
addTwo(3, 5);

// Define an array of arrays (nested data structure)
let operands = [
  [3, 5],
  [8, 6],
  [1, 2],
  [9, -2]
];

// Define a function with parameters
function addTwo(num1, num2) {
  return num1 + num2;
}

// Create an empty array to hold the sums
let sums = [];

// Use a for loop to iterate the operands and call addTwo()
for (let pair of operands) {
  let sum = addTwo(pair[0], pair[1]);  // array indexing + function call
  sums.push(sum);  // array methods
}

// Log the sums
console.log(sums);


// Built-in functions - Working With Math

// Math.PI: The constant pi
// Math.random(): A method for returning a random number between 0 and 1
// Math.abs(): A method for finding the absolute value of a number
// Math.min(): A method for returning the minimum of a series of numbers
// Math.max(): A method for returning the maximum of a series of numbers
// ...and many more!