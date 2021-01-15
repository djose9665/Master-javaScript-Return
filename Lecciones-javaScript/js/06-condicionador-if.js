'use strict'

// IF ES UN CONDICIONADOR DE VERDADERO O FALSO

var edad = 17;


if(edad < 18){
  alert("Tienes " + String(edad) + ", eres menor  de edad no puedes pasar");
}
else{
  alert("Tienes " + String(edad) +  " bienvenido");
}


// Condicional IF con operadores logicos

var velocidad = 25;

if(velocidad >= 40 && velocidad <= 60){
  alert("Tu velocidad en buena");
}
else if(velocidad < 40 && velocidad >= 10 ){
  alert("Tu velocidad es baja");
}
else if( velocidad > 60 && velocidad <= 120){
  alert("Vas a alta velocidad");
}
else if(velocidad > 120 ){
  alert("Cuidado!! Disminuye tu velocidad");
}
else if(velocidad == 0){
  alert("Enciende el auto");
}
else if(velocidad < 4 || velocidad < 10){
  alert("Puedes aumentar la velocidad")
}
else{
  alert("Error");
}
