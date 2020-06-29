# Quick.Calculator

Calculadora de JavaScript simple para simplificar tus tareas.

## Instalación

```
npm install quick.calculator --save
```

## Ejemplos de Uso

```js
var app = require("quick.calculator");
//Esto mostrará en la consola el resultado de la suma entre 1 y 10
var suma = app.sumar(1, 2, 3, 4, 5);
console.log(suma);
//Salida: 15
```

```js
var app = require("quick.calculator");
//Esto mostrará en la consola el resultado de la resta entre 1 y 10
var resta = app.restar(1, 10);
console.log(resta);
//Salida: -9
```

```js
var app = require("quick.calculator");
//Esto mostrará en la consola el resultado de la división entre 50 y 10
var division = app.dividir(50, 10);
console.log(division[0]);
//Salida: 5
```

```js
var app = require("quick.calculator");
//Esto mostrará en la consola el resultado de la división entre 50 y 10
var division = app.dividir(15, 10);
console.log(division);
//Salida: [1, 5]
console.log(division[0] + " " + division[1]);
//Salida: 1 5 
```

```js
var app = require("quick.calculator");
//Esto mostrará en la consola el resultado de la multiplicación entre 10 y 5
var multiplicacion = app.multiplicar(10, 5);
console.log(multiplicacion);
//Salida: 50
```

```js
var app = require("quick.calculator");
//Esto mostrará en la consola un resultado aleatorio entre 1 y 10
var random = app.randomize(10, 1);
console.log(random);
//Salida: Resultado Aleatorio
```

```js
var app = require("quick.calculator");
//Esto mostrará en la consola el resultado de los valores ingresados
//En este caso X es el valor numérico a ser evaluado
//En este caso Y es el porcentaje con el cual el valor X será evaluado
var X = 500;
var y = 15;
var porcentaje = app.porcentuar(X, Y);
console.log(porcentaje);
//Salida: 75
```

```js
//Esto verifica si el valor ingresado es un número, si lo es, retornara 'true'
var app = require("quick.calculator");
app.verificar(a13));              // true
app.verificar(-1.1);              // true
app.verificar('2a1'));            // true
app.verificar('-1.1');            // true
app.verificar(parseInt('08'));    // true
app.verificar(parseFloat('08'));  // true
app.verificar([0, 1, 2]);         // true
//Esto puedes usarlo de la siguiente manera
if (app.verificar(1) === true) {
    console.log("Eso si es un número");
} else {
    console.log("Eso no es un número");
};
```

```js
//Esto verifica si el valor ingresado es un número, si no lo es, retornara 'false'
app.verificar(null);              // false
app.verificar('');                // false
app.verificar('hi');              // false
app.verificar(['ax', 'bn', 'cd']);// false
app.verificar(function () {});    // false
//Esto puedes usarlo de la siguiente manera
if (app.verificar(Infinity) === false) {
console.log("Eso no es un número");
} else {
    console.log("Eso si es un número");
};
```


```js
var app = require("quick.calculator");
//Esto mostrará en la consola el valor del número ingresado
var redondeo = app.round(16.5);
console.log(redondeo);
//Salida: 17
```

```js
var app = require("quick.calculator");
//Esto mostrará en la consola el valor del número ingresado
var redondeo = app.round(16.4);
console.log(redondeo);
//Salida: 16
```

## Changelog

### V0.0.9

* \+\- Arreglado: Errores de la suma.

### V0.0.7

* \+\- Agregado: Sistema de restos en la división.
* \+\- Arreglado: Errores de escritura y errores en el resultado de operaciones amplias.

### V0.0.6

* \+\- Arreglado: Errores del sistema de suma han sido arreglados correctamente.

### V0.0.5

* \+ Agregado: Sistema de operaciones matemáticas básicas ha sido mejorado.

### V0.0.4

* \+ Agregado: Sistema de verificación funciona en arrays.

### V0.0.3

* \+ Agregado: Redondeo de valores con decimal.
* \+ Agregado: Licencia ISC agregada correctamente.

### V0.0.2

* \+\- Arreglado: Sistema de porcentaje ha sido arreglado correctamente.

### V0.0.1

* Primer Lanzamiento.