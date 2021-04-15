// Funcion normal de JavaScript
function getNumero(numero){
  return "Numero seleccionado" + numero;
}

console.log(getNumero(32))
// Funcion con TypeScript

function getNewNumber(numero:number = 45):string{
  return "Nuevo numero " + numero;
}

console.log(getNewNumber(74));
