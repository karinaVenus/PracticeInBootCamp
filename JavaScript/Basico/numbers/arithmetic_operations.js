// truco 1
console.log(Math.round( (0.1+0.3)*100 )/100);

//Number a cadena de texto
let a = 14.4365;
console.log(typeof a);  //number

let a_string = a.toString();
console.log(typeof a_string);  //string

//Limitar numero de decimales
//toFixed(x)
console.log(a.toFixed(2)); //14.44 se covierte a string con toFixed()
console.log(typeof a.toFixed(2));

//Limitar numero de cifras significativas
//toPrecision(x) -- tambien se obtiene string
console.log(a.toPrecision(2));   //14