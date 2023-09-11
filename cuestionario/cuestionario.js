/* Cuestionario:
1. Explica la diferencia entre usar var, let y const?
respuesta: las variables definidas con var existe de manera global, let solo existe solo en el bloque donde s define
 y las variables definidas con const su valor nunca va a cambiar(las variables definidas con var y let su valor si puede cambiar)
2. Con tus palabras, explica que son variables, objetos, arreglos y funciones.


3. Como recibe información (input) una función, y como devuelve un resultado?
Respuesta:Una funcion recibe informacion atravez de parametros y despues de hacer determinada accion devuelve el resultado con un return

4. Explica la diferencia entre == y === en una condición.
Respuesta:ambos sirven para hacer comparaciones de igualdad pero el === es mas estricto, es decir que no solo verifica si ambos valores valen lo mismo sino que
tambien verifican que ambos sean del mismo tipo(boolean,string,number etc) 

5. Sabes que valores son considerados 'truthy' y cuales son considerados 'falsy' por JS?
Si los conoces, menciónalos.
respuesta: valores truthy: "string",1,true.
falsy:null,undefine,false,0,"".
*/

/* - Crear un objeto que represente a una persona y que contenga los siguientes atributos:
    -- Nombres
    -- Apellidos
    -- Edad */

// const persona = {
//   nombres: "Kenley Josue",
//   apellidos: "Gaitan Evanks",
//   edad: 20,
// };
//

/*
 -- Saludar: será una función que imprima en consola este saludo: 
 "Hola [Nombres][Apellidos]". Además, si la edad de la persona es 
 mayor de 18, imprimir en consola "Es mayor de edad", de lo contrario 
 imprimir "Es menor de edad".
 */

// const saludo = () => {
//   console.log(`Hola ${persona.nombres} ${persona.apellidos}`);
//   if (persona.edad > 18) return console.log("Es mayor de edad");
//   return console.log("Es menor de edad");
// };

// saludo();

/* - Crear una función que simule una calculadora, la cual realizará operaciones básicas con dos números. La función debe recibir por 
parámetros los dos números a utilizar, y el signo de la operación a realizar ("+", "-", "*", "/"). La función debe retornar el
resultado de la operación. */

// const calculator = (number1, number2, operation) => {
//   let result;

//   switch (operation) {
//     case "+":
//       result = number1 + number2;
//       break;

//     case "-":
//       result =
//         number1 > number2
//           ? number1 - number2
//           : "the first number must be higher than the second number";
//       break;

//     case "*":
//       result = number1 * number2;
//       break;

//     case "/":
//       result =
//         number1 !== 0 ? number1 / number2 : "the first number can't be 0";
//       break;

//     default:
//       result = "you must choose a correctly operations";
//       break;
//   }

//   console.log(`El resultado de ${number1} ${operation} ${number2} = ${result}`);
// };

// calculator(10, 15, "/");

/* Llena los siguientes objetos con alguna información, y a partir de ellos realiza los siguientes puntos: */
let personalInfo = {
  firstName: "Kenley",
  middleName: "Josue",
  lastName: "Gaitan",
};
const contactInfo = {
  phoneNumber: "58083149",
  address: "Rubenia",
  email: "kenleyjos619@gmail.com",
};
/* 
1. Utilizando el spread operator (...) crea una función que reciba ambos objetos, los combine en uno solo y retorne el objeto nuevo.
Guárdalo en una constante llamada "person". */

const combineObjects = (object1, object2) => {
  const object = {
    ...object1,
    ...object2,
  };
  console.log("el nuevo objeto es: ", object);
  //
  const { firstName, lastName, phoneNumber } = object;
  console.log("los datos extraidos son: ", firstName, lastName, phoneNumber);
};

// combineObjects(personalInfo, contactInfo);

let newPersonalInfo = {
  firstName: "Kenley",
  middleName: "Josue",
  lastName: "Gaitan",
};

/* 2. Del objeto creado en el punto anterior, destructura los atributos: firstName, lastName, phoneNumber. */

/* 3. Crea una función que permita cambiar el nombre a la persona (Objeto person del punto 1). Esta función debe 
recibir un objeto que tendrá los nombres nuevos para la persona, y devolverá un objeto nuevo que tenga toda la 
información de la persona, pero con los nombres nuevos.
La función no necesariamente alterará todos los nombres, es decir, puede ser que solo necesite alterar firstName. */

const changeName = (newDataPerson) => {
  const newPerson = personalInfo.map((person) => {});
};

/* A partir del siguiente array, realiza los siguientes puntos:
const exerciseArray = [8, 1, 0, 3, 6, 7, 7, 3, 2, 10, 2, 5, 9, 2, 10, 1, 5, 8, 4, 10, 8, 3, 4, 8, 7, 6, 10, 2, 3, 4]; */
// 1: Crea una función que ordene el arreglo de mayor a menor usando el método SORT

let exerciseArray = [
  8, 1, 0, 3, 6, 7, 7, 3, 2, 10, 2, 5, 9, 2, 10, 1, 5, 8, 4, 10, 8, 3, 4, 8, 7,
  6, 10, 2, 3, 4,
];

// 2: Usando un ciclo FOR, encuentra el número que se repite mas ocasiones

// 3: Usando la función MAP, crea un arreglo que contenga el valor de cada item del arreglo original, elevado al cuadrado.
// Por ejemplo, el inicio del nuevo arreglo sería [64, 1, 0, 9].

// console.log("initial array: ", exerciseArray);

// exerciseArray = exerciseArray.map((array) => {
//   return Math.pow(array, 2);
// });

// console.log("new array: ", exerciseArray);

// 4: Usando la función FILTER, crea un arreglo con los números impares, y otro arreglo con los números pares.

console.log("Base array: ", exerciseArray);

const parArray = exerciseArray.filter((array) => array % 2 === 0);
console.log("Par array: ", parArray);

const imParArray = exerciseArray.filter((array) => array % 2 !== 0);
console.log("Impar array: ", imParArray);

// 5: Usando la funcion REDUCE, calcula el promedio de los números en el arreglo.
