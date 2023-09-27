
const numeroStr = prompt("Escribe un número: ");
const numero = parseInt(numeroStr);
if (isNaN(numero)) {
  console.log('Por favor, ingresa un número entero válido.');
} else {
    esParOImpar(numero);
}

function esParOImpar(numero) {
    console.log("el numero "+numero+" es:",numero % 2 === 0 ? "par" : "impar") 
  }
  
 