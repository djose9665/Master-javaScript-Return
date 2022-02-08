'use strict'

var parametros = process.argv.slice(2);

// console.log(parametros);

var numero1 = parseFloat(parametros[0]);
var numero2 = parseFloat(parametros[1]);

var plantilla = `
    suma = ${numero1 + numero1}
    resta = ${numero1 - numero2}
    multiplicacion = ${numero1 * numero2}
    division = ${numero1 / numero2}
`;

console.log(plantilla);
// console.log(numero2);