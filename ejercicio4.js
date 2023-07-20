const valores = [true, 5, false, "hola", "adios", 2];

let textoMasLargo = "";
let numeros = [];

valores.forEach(item => {
  switch (typeof item) {
    // case "boolean":
    //   break;
    case "string":
      if (item.length > textoMasLargo.length) {
        textoMasLargo = item;
      }
      break;
    case "number":
      numeros.push(item);
      break;
  }
});

let suma = numeros[0] + numeros[1];
let resta = numeros[0] - numeros[1];
let multiplicacion = numeros[0] * numeros[1];
let division = numeros[0] / numeros[1];

console.log("El texto más largo es:", textoMasLargo);
console.log("Resultado de la suma:", suma);
console.log("Resultado de la resta:", resta);
console.log("Resultado de la multiplicación:", multiplicacion);
console.log("Resultado de la división:", division);
