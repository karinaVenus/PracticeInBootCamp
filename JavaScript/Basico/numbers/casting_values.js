//operador valueOf() - Obtener valores numericos a partir de literales
let a=45;
let b = new Number(12); //declaracion de variables numericas

console.log(b);  //Number 12 {}
console.log(a+b); //57

//Obtener valores primitivos con valueOf()
console.log(b.valueOf()); //12

let str = new String("Hola mundo");
console.log(str);
console.log(str.valueOf());

//NaN (Not a Number)-Infinity
let n = Number('adios');
console.log(n);  //NaN
console.log(isNaN(n)); //true

let numerador = 14;
let divisor = 0;

console.log(numerador/divisor); //Infinity

let divisor_2 = null;
console.log(numerador/divisor_2); //Infinity

//Convertir string a Number, parseInt(x) y parseFloat(x)
let num1 = '2.767';
let num2 = 6.423;
console.log(typeof num1); //string
console.log(typeof Number(num1));  //number

//Numero hexadecimales 1..8ABCDEF (base 16)
let numHexa = '0x3A';
console.log(parseInt(numHexa,16)); //58

//valor maximo y minimo de js
let min_precision = Number.EPSILON;
let min_valor = Number.MIN_VALUE;
let max_valor = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor);
console.log(max_valor);