function esPalindromo(cadena) {
    const cadenaSinEspacios = cadena.replace(/\s/g, "").toLowerCase();
    const cadenaReversa = cadenaSinEspacios.split("").reverse();

    return cadenaSinEspacios === cadenaReversa;
}

const cadena = prompt("Escribe un string: ");

const resultado = esPalindromo(cadena);
console.log("la cadena:[" + cadena + "]", resultado ? "es un palíndromo." : "no es un palíndromo.")

