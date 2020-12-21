// Questions come from: https://docs.google.com/spreadsheets/d/1ElAMqtTrxS2MxaEnaceKMRGLBiJEAA7BBz15vK4vFAU/edit#gid=0





// What are the basic Data Types in JS?
// Numbers, Strings, Booleans, Symbols, Null, Undefined
let num = 4;
let str = "string";
let bool = true;
let n = null;
let und;
// Good video on Symbols: https://www.youtube.com/watch?v=gANDd4l-G5U
// Used to set properties of an object.
// Kind of can be thought of as enums. Two symbols can never be equal to one another even if you pass the same name to it.
const sym1 = Symbol("This is a symbol name"); // Note it is a function. Ther eis no "new" keyword.
const obj = {};
obj[sym1] = 123;
console.log(obj[sym1]);   // Now sym1 will always equal this property on this object.
// Symbols can also be used as constants.
const COLOR_RED = Symbol("Orange");
function doThing(input) {
  if (input === COLOR_RED) {
    // Do something
  }
}






// Artithmetic Operators
// +, -, *, /, %
function isEven(input) {
  if (input % 2 === 0)
    return true;
  return false;
}





// Unit Testing
// Using Jest
// Uncomment the below code. Commenting out because the functions and objects it calls don't exist.
// test("Description of what we are testing for"), () => {
//   // Given
//   const thing = new Thing();
//   const input = 123;

//   // When
//   const expected = 456;
//   const actual = thing.doThing(input);

//   // Then
//   expected(actual).toEqual(expected);
// }





// Outputs
console.log("Hello World");
document.write("Hello World");
// alert("This is an alert!");
// prompt("This is a prompt");
// confirm("Submit form?"); // Prompts user to select OK or Cancel.






// Conditional Statements
if ("red" === "green") {
  // do thing
} else {
  console.log("red does not equal green.");
}





// What symbols are used for comments in JS?
// This is a comment.
/* Can also do this */





// Variables
//console.log(a); // Null because it has not been declared yet and is not hoisted
console.log(c); // Undefined because c was hoisted but is not set until you reach it's line of code.
let a = 4;
const b = 1;
var c = 2;





// Added Strings
const str1 = "Hello";
const str2 = "World";
const sum = str1 + str2;    // is now HelloWorld.






// What are undeclared and undefined variables ?
x = 4;      // undeclared
let y;      // decalred but undefined.
let z = 2;  // declared and defined.





// What is 'this' keyword in JavaScript ?
// In a function, "this" refers to where it was called from.
function doSum() {
  console.log(this);    // refers to the object that called this method (in this case, Window bc global scope).
}
doSum();

let doSum2 = () => {
  console.log(this);    // refers to the object that called this method (in this case, Window bc global scope).
}
doSum2();

class MyClass {
  doSum3() {
    console.log(this);    // refers to object it is in. MyClass.
  }
}
const myClass = new MyClass();
myClass.doSum3();







// What would be the result of 3 + 2 + "7"
console.log(3 + 2 + "7");   // 57





// Explain the difference between "==" and "===" ?
// Regular equality Strict equality.
const a1 = 1;
const b1 = "1";
console.log(a1 == b1);    // prints true. Because they are both 1 even though they are different value types.
console.log(a1 === b1);   // prints false. Because one is a number and the other is a string.






// Which company made JavaScript ?
// Netscape.





// How is DOM used in JavaScript ?
const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.innerText = "This is an H1 tag";