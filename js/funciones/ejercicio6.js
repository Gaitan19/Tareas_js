let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numero = parseInt(prompt("Escribe tu numero de DNI"));

if (numero < 0 || numero > 99999999 || isNaN(numero)) {
    console.error("El número indicado no es válido");
} else {
    let letra = prompt("Escribe la letra de tu DNI ").toUpperCase();
    let letraCalculada = letras[numero % 23];
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