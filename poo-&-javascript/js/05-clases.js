'use strict';
window.addEventListener('load', function () {
    console.log("Clase");
    // Clase(Molde del objeto)
    // Propiedades (Caracteristicas del objeto)
    // Metodos (funciones o acciones del objeto)
    // Clase de una camiseta
    var Clases = /** @class */ (function () {
        function Clases() {
        }
        Clases.prototype.setColor = function (nuevo_color) {
            this.color = nuevo_color;
        };
        Clases.prototype.getColor = function () {
            return this.color;
        };
        return Clases;
    }());
    var camiseta = new Clases();
    camiseta.setColor("Verde");
    // camiseta.color = "Negro";
    // camiseta.modelo = "Manga corta";
    // camiseta.marca = "Adidas";
    // camiseta.talla = "S";
    // camiseta.precio = 199;
    // var playera = new Clases();
    // playera.color = "Roja";
    // playera.modelo = "Manga larga";
    // playera.marca = "Nike";
    // playera.talla = "S";
    // playera.precio = 250;
    console.log(camiseta);
});
