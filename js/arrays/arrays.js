/* Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a' */

/* 
function myFunction(a, n) {
   return a[n - 1];
}
myFunction([1,2,3,4,5],3) */

/* Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result */

/*
function myFunction(a) {
   return a.slice(3);
} 
myFunction([1,2,3,4])
 */

/* Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array */

/*
function myFunction(a) {
   return a.slice(-3);
}
myFunction([1,2,3,4]) */

/* Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array */

/* 
function myFunction(a) {
   return a.slice(0, 3);
}
myFunction([1,2,3,4]) */

/* Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of */

/* 
function myFunction(a, n) {
  return a.slice(-n);
}
myFunction([1, 2, 3, 4, 5], 2)
*/

/* Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array. */

/* 
function myFunction (a, b) {
  return a.filter((element) => element !== b);
}
myFunction([1,2,3], 2)
*/

/* 
function myFunction(a) {
   return a.length;
}
myFunction([1,2,2,4])
*/

/* Write a function that takes an array of numbers as argument. Return the number of negative values in the array. */

/* 
function myFunction(a) {
   return a.filter((el) => el < 0).length;
}
myFunction([1,-2,2,-4])
*/

/* Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result. */

/* 
function myFunction( arr ) {
return arr.sort()
}
myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])
*/

/* Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order. */

/* 
function myFunction( arr ) {
  return arr.sort((a, b) => b - a)
}
myFunction([4,2,3,1])
*/

/* Write a function that takes an array of numbers as argument. It should return the sum of the numbers. */

/* 
function myFunction(a) {
   return a.reduce((acc, cur) => acc + cur, 0);
}
myFunction([10,100,40])
*/

/* Write a function that takes an array of numbers as argument. It should return the average of the numbers. */

/* 
function myFunction( arr ) {
return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
myFunction([10,100,1000])
*/

/* Write a function that takes an array of strings as argument. Return the longest string. */

/* 
function myFunction( arr ) {
return arr.reduce((a, b) => a.length <= b.length ? b : a)
}
myFunction(['I', 'need', 'candy'])
*/

/* Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise. */

/* 
function myFunction( arr ) {
  return new Set(arr).size === 1
}
myFunction(['test', 'test', 'test'])
myFunction(['10',10,10,10])
*/

/* Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays. */

/* 
function myFunction( ...arrays ) {
return arrays.flat()
}
myFunction(['a', 'b', 'c'], [4, 5, 6])
*/

/* Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array */

/* 
function myFunction(arr) {
   const sort = (x, y) => x.b - y.b;
   return arr.sort(sort);
}
myFunction([{a:2,b:10},{a:5,b:4}])
*/

/* Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array */

/* 
function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}
myFunction([1, 2, 3], [3, 4, 5])
*/

/* Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum */

/* 
function myFunction(a, b) {
  return a.reduce((sum, num) => num > b ? sum + num : sum, 0);
}

const a = [2, 5, 8, 3, 6];
const b = 4;

const result = myFunction(a, b);
console.log(result); 
*/

/* Write a function that takes two numbers (min and max) as arguments. Return an array of numbers in the range min to max */

/* 
function range(min, max) {
  const result = [];

  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return result;
}

const result = range(1, 5);
console.log(result); 

*/

/* Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strings. For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']} */

/* function myFunction(arr) {
  const result = {};

  for (const str of arr) {
    const firstLetter = str[0].toLowerCase();
    if (result[firstLetter]) {
      result[firstLetter].push(str);
    } else {
      result[firstLetter] = [str];
    }
  }

  return result;
}

const arr = ['Alf', 'Alice', 'Ben'];
const result = myFunctionarr);
console.log(result);

*/


/* Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array, the first element should be either the given number itself. or zero if the number is smaller than 6. The other elements should be the elements of the original array. Try not to mutate the original array */

/* 
function createNewArray(arr, number) {
  const newArray = [number >= 6 ? number : 0, ...arr];
  return newArray;
}

const originalArray = ['a', 'b', 'c'];
const numberToInsert = 8;
const resultArray = createNewArray(originalArray, numberToInsert);
console.log(resultArray);
*/


/* Write a function that takes an array (a) and a value (n) as arguments. Save every nth element in a new array. Return the new array */

/*  

function saveEveryNthElement(a, n) {
  const result = [];
  for (let i = n - 1; i < a.length; i += n) {
    result.push(a[i]);
  }
  return result;
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultArray = saveEveryNthElement(array, 3);
console.log(resultArray);
*/