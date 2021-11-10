import { Pipe, PipeTransform } from "@angular/core";

@Pipe({    //Decorador
  name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform {
  
  // Sintaxis de una pipe es:      dato | calculadora: otroDato
                    //       oparametro1               parametro2
  transform( value, value_two: any){
    let operaciones = `
      Suma: ${value + value_two} - 
      Resta: ${value - value_two} - 
      Multiplicacion: ${value * value_two} - 
      Division: ${value / value_two} 
    `;

    return operaciones;
  }
}