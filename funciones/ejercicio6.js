var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero = prompt("Escribe tu numero de DNI (sin la letra)");
var letra = prompt("Escribe la letra de tu DNI en mayusculas").toUpperCase();
if (numero < 0 || numero > 99999999) {
    alert("El numero indicado no es válido");
}
else {
    var letraCalculada = letras[numero % 23];
    if (letraCalculada != letra) {
        alert ("La letra introducida no es válida");
    }
    else {
        alert ("el número y letra introducidos son correctos");
    }
}