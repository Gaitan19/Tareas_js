
  const numeroStr = prompt("Escribe un número: ");
  const numero = parseInt(numeroStr);
  if (isNaN(numero)) {
    console.log('Por favor, ingresa un número entero válido.');
  } else if (numero < 0) {
    console.log('El factorial no está definido para números negativos.');
  } else {
    calcularFactorial(numero);
  }
  
  function calcularFactorial(numero) {
    let factorial = 1;
    let factorizacion = '';
    for (let i = numero; i >= 1; i--) {
      factorial *= i;
      factorizacion += i === numero ? i : ` x ${i}`;
    }
    console.log(`${numero}! = ${factorizacion} = ${factorial}`);
  }
  