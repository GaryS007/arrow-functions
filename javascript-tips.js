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

// !!! String Methods - You can call on various methods to manipulate strings, numbers, arrays and so on. Example to follow

let title = "This is the Title of a Book";
let lowerTitle = title.toLowerCase();
console.log(lowerTitle);  // this is the title of a book or you can use toUpperCase()

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