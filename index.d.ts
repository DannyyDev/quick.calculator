/**
 * Suma todos los números que pases.
 *
 * @example
 * var app = require("quick.calculator");
 * //Esto mostrará en la consola el resultado de la suma entre 1 y 10
 * var suma = app.sumar(1, 2, 3, 4, 5);
 * console.log(suma);
 * //Salida: 15
 *
 * @param numeros Los números que quieres sumar.
 * @returns El resultado de la suma.
 */
export function sumar(...numeros: number[]): number;

/**
 * Resta dos números.
 *
 * @example
 * var app = require("quick.calculator");
 * //Esto mostrará en la consola el resultado de la resta entre 1 y 10
 * var resta = app.restar(1, 10);
 * console.log(resta);
 * //Salida: -9
 *
 * @param a Primer número.
 * @param b Cantidad a restar al primer número.
 * @returns El resultado de la resta.
 */
export function restar(a: number, b: number): number;

/**
 * Multiplica dos números.
 *
 * @example
 * var app = require("quick.calculator");
 * //Esto mostrará en la consola el resultado de la multiplicación entre 10 y 5
 * var multiplicacion = app.multiplicar(10, 5);
 * console.log(multiplicacion);
 * //Salida: 50
 *
 * @param a Primes número
 * @param b Segundo número a multiplicar con el primero
 * @returns El resultado de la multiplicación.
 */
export function multiplicar(a: number, b: number): number;

/**
 * Divide un número con otro.
 *
 * @example
 * var app = require("quick.calculator");
 * //Esto mostrará en la consola el resultado de la división.
 * var division = app.dividir(50, 10);
 * console.log(division[0]);
 * //Salida: 5
 * var division = app.dividir(15, 10);
 * console.log(division);
 * //Salida: [1, 5]
 * console.log(division[0] + "." + division[1]);
 * //Salida: 1.5
 *
 * @param a Primer número
 * @param b Segundo número que dividirá al primero
 * @returns Un array con dos valores enteros, el primero valor es el número entero y el segundo son los decimales.
 */
export function dividir(a: number, b: number): number[];

/**
 * Genera un número aleatorio entre dos números
 *
 * @example
 * var app = require("quick.calculator");
 * //Esto mostrará en la consola un resultado aleatorio entre 1 y 10
 * var random = app.randomize(10, 1);
 * console.log(random);
 * //Salida: Resultado Aleatorio
 *
 * @param a Número mínimo que regresará
 * @param b Número máximo que regresará
 * @returns Un número entre el valor a y el valor b.
 */
export function randomize(a: number, b: number): number;

/**
 * Porcentúa un número.
 *
 * @example
 * var app = require("quick.calculator");
 * //Esto mostrará en la consola el resultado de los valores ingresados
 * //En este caso X es el valor numérico a ser evaluado
 * //En este caso Y es el porcentaje con el cual el valor X será evaluado
 * var X = 500;
 * var y = 15;
 * var porcentaje = app.porcentuar(X, Y);
 * console.log(porcentaje);
 * //Salida: 75
 *
 * @param a Número a ser evaluado
 * @param b El porcentaje con el cuál el valor a será evaluado
 * @returns El número que corresponde al porcentaje dado.
 */
export function porcentuar(a: number, b: number): number;

/**
 * Verifica si el valor ingresado es un número.
 *
 * @example
 * var app = require("quick.calculator");
 * app.verificar(a13));              // true
 * app.verificar(-1.1);              // true
 * app.verificar('2a1'));            // true
 * app.verificar('-1.1');            // true
 * app.verificar(parseInt('08'));    // true
 * app.verificar(parseFloat('08'));  // true
 * app.verificar([0, 1, 2]);         // true
 * app.verificar(null);              // false
 * app.verificar('hi');              // false
 * app.verificar(['ax', 'bn', 'cd']);// false
 * app.verificar(function () {});    // false
 * //Esto puedes usarlo de la siguiente manera
 * if (app.verificar(1) === true) {
 *    console.log("Eso si es un número");
 * } else {
 *     console.log("Eso no es un número");
 * };
 *
 * @param a Valor a verificar
 * @returns Si el valor es un número retornará true
 */
export function verificar(a: any): boolean;

/**
 * Redondea un número a su número entero más cercano.
 *
 * @example
 * var app = require("quick.calculator");
 * //Esto mostrará en la consola el valor del número ingresado
 * var redondeo = app.round(16.5);
 * console.log(redondeo);
 * //Salida: 17
 * var redondeo = app.round(16.4);
 * console.log(redondeo);
 * //Salida: 16
 *
 * @param a Número a redondear
 * @returns El número redondeado a entero.
 */
export function round(a: number): number;
