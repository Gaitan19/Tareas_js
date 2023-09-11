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

const persona = {
  nombres: "Kenley Josue",
  apellidos: "Gaitan Evanks",
  edad: 20,
};
/*
 -- Saludar: será una función que imprima en consola este saludo: 
 "Hola [Nombres][Apellidos]". Además, si la edad de la persona es 
 mayor de 18, imprimir en consola "Es mayor de edad", de lo contrario 
 imprimir "Es menor de edad".
 */

const saludo = () => {
  console.log(`Hola ${persona.nombres} ${persona.apellidos}`);
  if (persona.edad > 18) return console.log("Es mayor de edad");
  return console.log("Es menor de edad");
};

saludo();
