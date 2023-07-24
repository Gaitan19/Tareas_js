/* Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result */
/* function
myFunction
(a, b)
{
let result = a + b;
  return result;
} */

/* Write a function that takes a value as argument. Return the type of the value. */
/* function
myFunction
(a)
{

return typeof a;
} */

/* Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'. */

/* function myFunction(a, n) {
   return a[n - 1];
}        
 */

/* Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result */

/* function myFunction(a) {
   return a.slice(3);
} */

/* Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result */

/* function myFunction(str) {
   return str.slice(-3);
} */

/* Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result */

/* function myFunction(a) {
   return a.slice(0, 3);
} */

/* Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'. */

/* function myFunction(a) {
   return a.indexOf('is');
} */

/* Write a function that takes a string (a) as argument. Extract the first half a. Return the result */

/* function myFunction(a) {
   return a.slice(0, a.length / 2);
} */

/* Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result */

/* function myFunction(a) {
   return a.slice(0, -3);
} */

/* Write a function that takes two numbers (a and b) as argument. Return b percent of a */

/* function myFunction(a, b) {
  return b / 100 * a
} */

/* function myFunction(a, b, c, d, e, f) {
   return (((a + b - c) * d) / e) ** f;
} */

/* Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation */

/* function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a
} */

/* Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false */
/* function myFunction(a) {
  return a % 2 === 0
} */

/* Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
 */

/* function myFunction(a, b) {
  return b.split(a).length - 1
} 
myFunction('m', 'how many times does the character occur in this sentence?')
*/

/* Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false. */

/* 
function myFunction(a) {
 return a % 1 === 0;
} 
    myFunction(4)

*/

/* Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value */

/* function myFunction(a, b) {
  return a < b ? a / b : a * b
} 
myFunction(10, 100)
*/

/* Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number */

/* 
function myFunction(a) {
  return Number(a.toFixed(2));
}
myFunction(2.12397) */

/* Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting */

/* 
function myFunction(a) {
  return Array.from(String(a), Number);
}

myFunction(10)*/

/* It seems like something happened to these strings. Can you figure out how to clear up the chaos? Write a function that joins these strings together such that they form the following words:. 'Javascript', 'Countryside', and 'Downtown'. You might want to apply basic JS string methods such as replace(), split(), slice() etc. */

/* function fixWords(str1, str2, str3) {
  const word1 = str1.slice(0, 1).toUpperCase() + str1.slice(1);
  const word2 = str2.slice(6, 10) + str2.slice(2, 6) + str2.slice(0, 2);
  const word3 = str3.replace('d', 'D').replace('o', 'O').replace('w', 'W');

  return [word1, word2, word3];
}

console.log(fixWords(javascript", ntrsydeuocid, owntown));*/

/* This challenge is a little bit more complex. Write a function that takes a number (a) as argument. If a is prime, return a. If not, return the next higher prime number. */

/* function findNextHigherPrime(a) {
  const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  while (!isPrime(a)) a++;
  return a;
}

// Ejemplo de uso:
console.log(findNextHigherPrime(10)); 
 */