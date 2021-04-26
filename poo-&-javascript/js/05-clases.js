'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.addEventListener('load', function () {
    // console.log("Clase");
    // Clase(Molde del objeto)
    // Propiedades (Caracteristicas del objeto)
    // Metodos (funciones o acciones del objeto)
    // Clase de una camiseta
    var Clases = /** @class */ (function () {
        function Clases(color, modelo, marca, talla, precio) {
            this.color = color;
            this.modelo = modelo;
            this.marca = marca;
            this.talla = talla;
            this.precio = precio;
        }
        Clases.prototype.setColor = function (nuevo_color) {
            this.color = nuevo_color;
        };
        Clases.prototype.getColor = function () {
            return this.color;
        };
        return Clases;
    }());
    var Sudadera = /** @class */ (function (_super) {
        __extends(Sudadera, _super);
        function Sudadera() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Sudadera.prototype.setCapucha = function (capucha) {
            this.capucha = capucha;
        };
        Sudadera.prototype.getCapucha = function () {
            return this.capucha;
        };
        return Sudadera;
    }(Clases));
    var sudadera_nike = new Sudadera("gris", "Manga Larga", "Nike", "L", 400);
    sudadera_nike.setCapucha(true);
    sudadera_nike.setColor("Negro");
    console.log(sudadera_nike);
    var camiseta = new Clases("Rojo", "Manga larga", "Nike", "L", 250);
    console.log(camiseta);
});
