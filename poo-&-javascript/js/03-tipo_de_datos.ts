// String 
let cadena: string | number = "Daniel Martinez";

// Number
let edad: number | boolean = 45;

// boleano
let verdadero_falso: boolean | string = true;

// Any
let cualquiera: any = "Hola";
cualquiera = "Nuevo";

// arrays (<string, number, any,boolean >)
var lenguajes: Array<string> = ["JavaScript", "PHP", "JAVA"];
// var lenguajes: Array<boolean> = [true, false];

let cancion: string[] = ["This is a war", "La vuelta al mundo", "Box"];

// Mi tipo de dato
type alfanumerico = string | number;

var nuevo: alfanumerico = "hghjg";

nuevo = 12;
var numero1 = 13;
if(nuevo == 12){
  let nuevo: string = "Doce";
  var numero1: number = 15;

  console.log(nuevo, numero1);
}



console.log(cadena, edad, verdadero_falso, cualquiera, lenguajes, cancion, nuevo, numero1); 