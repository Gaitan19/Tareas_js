
const cadena = prompt("Escribe un string: ")


console.log(TipoCadena(cadena));


function TipoCadena(cadena) {
    return cadena === cadena.toUpperCase()
        ? "La cadena está formada solo por mayúsculas."
        : cadena === cadena.toLowerCase()
            ? "La cadena está formada solo por minúsculas."
            : "La cadena es una mezcla de mayúsculas y minúsculas.";
}
