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

/* In the code below, we define a function multiply that has a parameter called num. The function returns num multiplied by itself.
Adjust the code below such that the console.log() statement logs true. */

/* function multiply(num) {
  return num * num;
}

let result = multiply(5);

console.log(result === 25); 
 */

/* In this exercise, the function multiply has two parameters x and y. Adjust the code such that the console.log() statement logs true. */

/* function multiply(x, y) {
  return x * y;
}

let result = multiply(5, 4);

console.log(result === 20);
 */

/* In this exercise, the function func defines the parameters a and b. But, currently only 1 argument is passed to the function. Therefore, the value of b is undefined.
Adjust the code below so that the console.log() statement logs hello world. */
/* function func(a, b) {
  return a + " " + b;
}

let result = func("hello", "world");

console.log(result); 
 */

/* As we have seen in a previous exercise, a return statement blocks any code following the statement from being executed. But, this is only true if the return statement actually runs. Using an if...statement, we can prevent a code from being executed if a condition is not met.
In the code below we use this pattern to stop a function early if the parameter num is smaller than 5.
Adjust the code so that the value of result is 25. */

/* function multiplyIfGreaterThan5(num) {
  if (num < 5) {
    return;
  }
  return num * num;
}

let result = multiplyIfGreaterThan5(5);

console.log(result);
 */

/* In this exercise, we have an array called arr. In the console.log() statement we use the array.length property to get the number of array elements. The statement logs true if the array has 3 elements.
Task: Add a third element to the array. It can have any value. */

/* let arr = [1, 2];
arr.push(3); 

console.log(arr.length === 3); 
 */
/* In the code below we try the access the first element of the array. But, we introduced a slight mistake. Fix the mistake and run the code. */
/* let arr = [1, 2, 3];
let firstElement = arr[0];

console.log(firstElement); 
 */

/* Using what we learned earlier, let's write a generic function that returns the last element of an array we pass to it. As you can see, we use that function to get the last element of both arrOne and arrTwo. But, the function is not complete yet. Add what's missing to get the last element of any array we pass to it – you may need to use the Array.length property. */

/* function getLastElement(arr) {
  if (arr.length === 0) {
    return undefined; 
  }

  return arr[arr.length - 1]; 
}

let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6, 7];

let lastElementArrOne = getLastElement(arrOne);
let lastElementArrTwo = getLastElement(arrTwo);

console.log(lastElementArrOne); 
console.log(lastElementArrTwo); 
 */

/* Sometimes we want to know where a specific element is located inside an array. That's what the method array.indexOf() is for. This method returns the index position of a specific element inside an array.
For example ['a', 'b'].indexOf('a') returns 0 because that's the index of the string 'a' within the given array.
You can also find out if a specific element is not present inside an array. ['a', 'b'].indexOf('c') returns -1 which means that 'c' does not exist in the array.
In the code below we use the array.indexOf() method to get the index of an element. Later on, we use that index to retrieve this element and compare it to the expected value. But there is something mixed up. Change the code below such that the console.log() statement logs true. */
/* let arr = ['apple', 'banana', 'orange'];
let element = 'banana';
let index = arr.indexOf(element);
let retrievedElement = arr[index];

console.log(retrievedElement === element); 
 */

/* With the array.push() method we can add an element to an array. It can be applied to an existing array to append new values to the end of the array.
In the example below, we apply the array.push() method to extend the array numbers with the number 3. To solve this task, append another number to the end of the array. Use the correct number for the console.log() statement to log true. */

/* let numbers = [1, 2];
numbers.push(3); 

console.log(numbers[2] === 3); 
 */

/* The animal object has a property lifespan. Assign the value of this property to the variable lifespan. */
/* let animal = {
  species: "Lion",
  color: "Yellow",
  lifespan: 15
};

let lifespan = animal.lifespan;

console.log(lifespan); // Output: 15
 */

/* Add a property with key year and value 2020 to the object car. */
/* let car = {
  make: "Toyota",
  model: "Corolla",
  color: "Silver"
};

car.year = 2020;

console.log(car);
 */

/* he person object is empty. Add properties with keys name and age and enter appropriate values. */
/* let person = {};

person.name = "John";
person.age = 30;

console.log(person);
 */

/* In the code below we have a for-loop where we create a counter-variable i with the value 1. As long as i is smaller than 3 the loop keeps running. After each iteration i is incremented by 1. In each iteration we log the current value of i. We also add the value of i to the variable result.
Task: Adjust the code such that the console.log() logs true.
Tipp: Be careful not to implement an infinite loop! */

/* In the code below we have a for-loop where we create a counter-variable i with the value 1. As long as i is smaller than 3 the loop keeps running. After each iteration i is incremented by 1. In each iteration we log the current value of i. We also add the value of i to the variable result.
Task: Adjust the code such that the console.log() logs true.
Tipp: Be careful not to implement an infinite loop! */

/* let result = 0;

for (let i = 1; i < 3; i++) {
  console.log(i); 
  result += i; 
}

console.log(result === 3); 
 */

/* Our second for-loop exercise shows how you can use a loop to iterate over the elements of an array. In this example, we will filter numbers from an existing array. The loop iterates over each element of the array mixed. If the current element is of type number, it will append it to the array newArray.
To solve this task, complete the loop expressions inside the brackets. */

/* let mixed = [1, "apple", 2, "orange", 3, "banana"];
let newArray = [];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === "number") {
    newArray.push(mixed[i]);
  }
}

console.log(newArray); 
 */

/* In this exercise you will learn how to abort a running loop even though its condition is still satisfied.
You can use the break statement to achieve this. You can place the break statment anywhere inside the code-block of a loop. As soon as break is evaluated, the loop is terminated. Usually, you would place break behind an if condition. Then, the loop will only abort if a certain condition met.
In the example below, we iterate through the elements of the array mixed. In each iteration, we append the current element of mixed to the new array newArray. But, in this exercise we want to abort the loop if the current element is not of type number.
Complete the if statement below and execute break if the current element is not of type number. */

/* let mixed = [1, "apple", 2, "orange", 3, "banana"];
let newArray = [];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] !== "number") {
    break;
  }
  newArray.push(mixed[i]);
}

console.log(newArray);
 */

/* In this exercise you will learn how to create a while loop. This loop is very similar to a for loop. The syntax is while (condition) { statement }. It reads: As long as the condition is met, execute the statement. It's basically an if statement that is repeated until the condition is no longer met.
In the example below we execute a while loop. As long as the condition of the loop is met, num increases by 2 and i by 1. Adjust the condition of the while loop so that the final value of num is 60. */

/* let num = 0;
let i = 0;

while (num <= 60) {
  num += 2;
  i++;
}

console.log(num); // Output: 60
 */

/* Here, we have a function calculatePrice that calculates the total price of a product. We execute that function and save the result in the variable total.
But, the code will not work like this because we can not access the variable result from outside the function. Correctly save the result of calculatePrice in the variable total. */
/* function calculatePrice(price, quantity) {
  return price * quantity;
}

let total = calculatePrice(10, 5);

console.log(total); 
 */

/* We want to use the function func to update the global variable x. But when we run the code, the value of global x is not updated. Adjust the code so that the final value of global x is 2. */

/* let x = 1;

function func() {
  x = 2; 
}

func();
console.log(x); 
 */

/* Use what you have learned about Function Scope to make the function multiply return the value 50. */

/* let x = 10;

function multiply() {
  return x * 5;
}

let result = multiply();
console.log(result); 
 */

/* Adjust the code so that result is the sum of x and the block version of y. */

/* let x = 10;
let y;

{
  let yBlock = 5;
  y = yBlock;
}

let result = x + y;
console.log(result); 
 */

/* djust the code such that the logged value of x is 30. */

/* let x = 10;

{
  let x = 20;
  x += 10; 
  console.log(x); 
}

console.log(x); 
 */

/* Here we pass a function as argument to getValue. However, we do not use it yet. Use the callback function so that the value 5 is logged. */

/* function getValue(callback) {
  let value = 5;
  callback(value);
}

getValue(function (result) {
  console.log(result); 
});
 */

/* Use the multiply function as a callback function within getValue so that the final value of b is 10. */

/* function getValue(callback) {
  let a = 2;
  let b = callback(a, 5);
  console.log(b);
}

function multiply(x, y) {
  return x * y;
}

getValue(multiply);
 */