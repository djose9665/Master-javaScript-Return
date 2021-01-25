'use strict'
// Funciones
  /**
   * Las funciones son un grupo de ordenes, reglas o instrucciones definidas por un nombre en concreto 
   * que se pueden utilizar indefinidamente 
   */

function despertar(hora, actividad){
  console.log("Me levanto a las " + hora + " y lo primero que hago es " + actividad);  
}

// Asi se manda llamar una funcion
// despertar();

function enfermedad(sintoma1, sintoma2, confirmacion = false){
  if(confirmacion == true){
    alert("CUIDADO!!! " + "\n" + "El primer sintoma es: " + sintoma1 + "\n" + "El segundo sintoma es: " +sintoma2);
  }
  else{
    document.write("Falsa alarma!!" + "<br>" + "El sintoma de " + sintoma1 + " y el sintoma de " + sintoma2 + " es por gripa comun");
  }
}