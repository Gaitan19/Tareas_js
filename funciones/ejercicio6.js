var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Leer el número de DNI desde la consola
var numero = parseInt(prompt("Escribe tu numero de DNI (sin la letra)"));

if (numero < 0 || numero > 99999999 || isNaN(numero)) {
    console.error("El número indicado no es válido");
} else {
    // Leer la letra de DNI desde la consola
    var letra = prompt("Escribe la letra de tu DNI en mayúsculas").toUpperCase();
    var letraCalculada = letras[numero % 23];
    if (letraCalculada != letra) {
        console.error("La letra introducida no es válida");
    } else {
        console.log("El número y letra introducidos son correctos");
    }
}

/* 
65004204V
24681357B
12345678Z
*/