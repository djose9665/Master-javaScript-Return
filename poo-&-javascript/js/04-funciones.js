// Funcion normal de JavaScript
function getNumero(numero) {
    return "Numero seleccionado" + numero;
}
console.log(getNumero(32));
// Funcion con TypeScript
function getNewNumber(numero) {
    if (numero === void 0) { numero = 45; }
    return "Nuevo numero " + numero;
}
console.log(getNewNumber(74));
