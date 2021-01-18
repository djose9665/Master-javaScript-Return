'use strict'
/**
 * AND (Y) = &&
 * OR (Ó)  = ||
 * NEGACION = !
 **/

var caguama = "Indio";


if(caguama == "Tecate Roja" || caguama == "Carta Blanca"){
  console.log( "Las " + caguama + " dan mucha cruda");
}

if(caguama != "Indio" && caguama == "Bud Light" ){
  console.log("No compres Bud Light");
}
else if(caguama == "Indio"){
  console.log("Perfecto!!")
}
else{
  console.log("De preferencia compra caguamas Indio o Victoria");
}

