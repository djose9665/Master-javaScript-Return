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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
window.addEventListener('load', function () {
    // console.log("Clase");
    // Decorador
    function estampar(logo) {
        return function (target) {
            target.prototype.estampacion = function () {
                console.log("Camiseta estampada con el logo de " + logo);
            };
        };
    }
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
        Clases = __decorate([
            estampar('Nike')
        ], Clases);
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
    var camiseta = new Clases("Rojo", "Manga larga", "Nike", "L", 250);
    console.log(camiseta);
    camiseta.estampacion();
    var sudadera_nike = new Sudadera("gris", "Manga Larga", "Nike", "L", 400);
    sudadera_nike.setCapucha(true);
    sudadera_nike.setColor("Negro");
    console.log(sudadera_nike);
});
