/* Assign a new value to the variable num.
 The code will not work the way it is. Find the mistake and fix it. Execute the corrected code. */

/* let num = 1;
num = 2;
console.log(num); */

/* Here, we declare the variable num. But, it has no value yet. Assign a value to it and run the code. */
/* let num;
num = 2;
console.log(num); */

/* Here, we have two variables numOne and numTwo. numOne already 
has a value. Assign numTwo the value of numOne and run the code. */

/* let numOne = 5;
let numTwo = numOne;
console.log(numTwo); */

/* Here, we declare the variable isTrue. But, it has no value yet. Assign a boolean value to it and run the code. */
/* let isTrue;
isTrue = true;
console.log(isTrue); */

/* Here, we declare the variable num and assign it the value 5. We also declare the variable bool which we assign the boolean representation of num.
Extend the code such that the console.log() statement logs false.
 */
/* let num = 5;
num = 0;
const bool = Boolean(bool);
console.log(bool); */

/* In the console.log() statement below we use the Equal operator to check whether numOne and numTwo have the same value. Change the code so that the console.log() statement logs true.
 */

/* const numOne = 5;
const numTwo = 5;
console.log(numOne == numTwo); */

/* In the console.log() statement below we use the Greater Than operator to check whether the value of numOne is greater than the value of numTwo. Change the code so that the console.log() statement logs true. */
/* const numOne = 6;
const numTwo = 5;
console.log(numOne > numTwo); */

/* In the console.log() statement below we use the Less Than operator to check whether the value of numOne is less than the value of numTwo. Change the code so that the console.log() statement logs true. */

/* const numOne = 1;
const numTwo = 2;
console.log(numOne < numTwo); */

/* In the console.log() statement below we use the Greater Than Or Equal operator to check whether the value of numOne is greater than or equal the value of numTwo. It also checks whether the value of numTwo is greater than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs tru
e. */

/* const numOne = 3;
const numTwo = 2;
const numThree = 2;
console.log(numOne >= numTwo, numTwo >= numThree); */

/* In the console.log() statement below we use the Less Than Or Equal operator to check whether the value of numOne is less than or equal the value of numTwo. It also checks whether the value of numTwo is less than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.
 */

/*  const numOne = 1;
const numTwo = 1;
const numThree = 2;
console.log(numOne <= numTwo, numTwo <= numThree);*/

/* In the console.log() statement below we use the Strict Equality operator to check whether numOne and numTwo have the same value and are of the same type. Change the code so that the console.log() statement logs true. */
/* let numOne = 5;
let numTwo = 5;

console.log(numOne === numTwo);
 */

/* In the console.log() statement below we use the Strict Inequality operator to check whether numOne and numTwo have different values or if they are of different types. And we also use the Equality operator to check whether numOne and numTwo have the same value (not considering their types). Change the code so that both expressions inside the console.log() statement logs true. */
/* let numOne = "5";
let numTwo = 5;

console.log(numOne !== numTwo && numOne == numTwo);
 */

/* Another way to chain multiple comparison operators is the logical OR (||) operator. In the code below, result will have the value true if either of the comparison expressions evaluate to true.
Adjust the code below such that result will have the value true. */

/* let numOne = 10;
let numTwo = "10";

let result = numOne == numTwo || numOne === Number(numTwo);

console.log(result);
 */

/* In the code below we calculate the sum of numOne and numTwo with the Addition operator +. Then, the console.log() statement checks whether the sum equals 10. Change the code so that the console.log() statement logs true. */

/* let numOne = 4;
let numTwo = 6;

let sum = numOne + numTwo;

console.log(sum === 10); */

/* In the code below we calculate the difference of numOne and numTwo with the Substraction operator -. Then, the console.log() statement checks whether the difference equals 5. Change the code so that the console.log() statement logs true. */
/* let numOne = 8;
let numTwo = 3;

let difference = numOne - numTwo;

console.log(difference === 5);
 */

/* n the code below we use the Remainder operator to calculate the remainder of numOne divided by numTwo. The console.log() statement expects the remainder to be 3. Change the code so that the remainder is 3. */
/* let numOne = 10;
let numTwo = 7;

let remainder = numOne % numTwo;

console.log(remainder === 3); // Output: true
 */

/* In this exercise the existing console.log() statement logs the value of the variable text. The variable text has already been declared with an empty string – as indicated by the two single quotes.
Fill in the string with some characters and run the code to see if the string is being logged. */

/* const text = 'hello world';
console.log('The value of text is: ' + text); */

/* Here, we have declared 3 variables textOne, textTwo, and textThree. An empty string is assigned to all of them.
Do you see how in each case different symbols are used to create the string? All three of them are valid methods to create a JavaScript string.
Fill in all 3 strings with some characters and run the code to see if the values get logged.
 */
/* 
const textOne = 'hola';
const textTwo = "mundo";
const textThree = `que tal`;
console.log(textOne, textTwo, textThree);
 */

/* After we have learnt how to create JavaScript strings, we will now connect 2 strings together. In the code below we use the Addition (+) operator to concatenate textOne and textTwo. The console.log() statement logs the resulting string. Currently, the result would be HelloWorld.
Change the code below so that the value of res is Hello World */

/* 
const textOne = 'Hello';
const textTwo = 'World';
const combined = textOne + " " + textTwo;
console.log(combined);
 */

/* In this scenario we use template literals to combine strings. Template literals allow you to dynamically insert a string into another string at a specific position. When using template literals you create strings with backticks (`). You can inject a JavaScript expression using ${expression} — e.g. ${1+1} which would insert 2 into the string.
Adjust the code below such that the value of the variable word is inserted into the string of the variable sentence. Run the code to see if the complete sentence is logged. */

/* let word = "beautiful";
let sentence = `The sunset looks ${word}.`;

console.log(sentence);
 */

/* Here we created a string with backticks (`). But, we forgot to wrap the term 1+1 with the correct syntax. What we want is that it is recognized as a JavaScript expression and evaluated as such.
Adjust the code below such that the term 1+1 is evaluated and the result inserted into the string. */

/*  let result = 1 + 1;
let sentence = `The result of 1 + 1 is ${result}.`;

console.log(sentence);
*/

/* The code will assign the variable num a new value 1. But it will only run if the condition is met.
Adjust the condition such that the code inside the curly braces will execute and the console.log() statement logs true. */

/* 
let num = 0;
if (1 < 2) {
   num = 1;
}
console.log(num === 1); */

/* Time to practice what we've learnt so far. In the code below, the if...statement will assign a new value to the variable text. But only if its condition is met. Currently, the condition is missing.
Add any condition that will be satisfied such that the console.log() statement logs true. */
/* let text = 'hello';
if (text != 'hello world') {
   text = text + ' world';
}
console.log(text === 'hello world'); */

/* This exercise is very similar to the previous one. But, this time we also have an else statement. An else statement is another piece of code – wrapped by curly braces – that only runs if the condition is not satisfied.
Adjust the condition such that the code inside the else statement will be executed and the console.log() statement logs true. */

/* let numOne = 10;
let numTwo = 3;

if (numOne % numTwo === 0) {
  console.log("The numbers are divisible.");
} else {
  console.log("The numbers are not divisible."); 
}
 */

/* As we have seen in a previous exercise, you can chain multiple expressions using logical operators. We can use this to test multiple conditions in 1 if-statement.
The code below is missing 1 expression after the logical AND (&&) operator inside the if-condition. Adjust the code such that the value of result will be true. Another possible condition could be numTwo to strictly equal 6. */

/* let numOne = 4;
let numTwo = 6;

let result = numOne > 2 && numTwo === 6;

console.log(result); 
 */

/* if...else statements give you an either-or choice. But sometimes you have scenarios with more choices. In this exercise we use an else-if block to add one more possibility. The following if...else-statement changes the text of the variable text in 3 different ways. If num is greater than 2 the first block inside the if...else-statement runs. But, if num is not greater than 2, but still greater than 1, the else-if block is executed. If neither of those options pass the condition, we have the else-block as a fallback.
Adjust the code below such that the value of text will be 'num is greater than 1'. */

/* let num = 2;
let text;

if (num > 2) {
  text = 'num is greater than 2';
} else if (num > 1) {
  text = 'num is greater than 1'; 
} else {
  text = 'num is 1 or smaller';
}

console.log(text); 
 */

/* The conditional (ternary) operator can be used to replace simple if...else statements. The syntax is: condition ? if true : else. If the condition is met, the code after the question mark (?) is executed. If it is not met, the code after the semicolon (:) is executed. In simple if-else scenarios the conditional (ternary) operator can save a lot of code.
In this example we use the conditional (ternary) operator to assign a value to the variable text depending on the value of num. Adjust the code such that the value of text will be 'num is greater than 3'. */

/* let num = 5;
let text = num > 3 ? 'num is greater than 3' : 'num is not greater than 3';

console.log(text); 
 */

/* In this exercise we create a function called func. Then we call the function and assign its return value to the variable result. To solve this exercise, simply have the console.log() statement log the words hello world. */

/* 
function func() {
   return 'hello world';
};
const result = func();
console.log(result); */

/* In the code below, we introduced a small mistake when calling the function func. Find the mistake and run the code to see if the words hello world are correctly logged. */
/* 
const func = function() {
   return 'hello world';
};
const result = func();
console.log(result); */

/* In this exercise, we create a function func. Then, we call func and assign its return value to the variable result.
When you run the code like this, you see that the value undefined is logged. This is the current return value of func because we do not explicitly define a return value ourselves.
Let func return the value of the variable text. */

/* 
const func = function() {
   let text = 'hello';
   text = text + ' world';
   return text;
};
const result = func();
console.log(result); */

/* In this exercise func declares a variable text with the value hello. Then it returns the value of text. After that, it assigns a new value hello world to the variable text and returns the new value.
But, when you run the code, you see that only the initial value of text (hello) is logged.
Adjust the code so that the final value of text is logged. */

/* const func = function () {
   let text = 'hello';
   text = text + ' world';
   return text;
};
const result = func();
console.log(result); */

