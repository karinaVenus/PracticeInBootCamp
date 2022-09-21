//metodos mas utilizados con cadenas de caracteres
//1. obtener longitud de string
let str = "Hi!, I am string";
console.log(str.length);

//2. obtener secciones de string
// slice() subtring() subtr()
let str_slice = str.slice(1,14);
console.log(str_slice);

let str_substring = str.substring(1,14);
console.log(str_substring);

let str_subtr =str.substr(1,14);
console.log(str_subtr);

//3.reemplazar seccion de un string
//replace actua sobre la primer instancia
let texfull ="tres tristes tigres tres tristes tigres"
console.log(texfull.replace('tres','cuatro'));
console.log(texfull.replace(/tres/g,'cinco'));

let word = "Tigre De Bengala"; 
//4. Convertir a mayuscula
console.log(word.toUpperCase());

//5. Convertir a minuscula
console.log(word.toLowerCase());

//6.concatenar strings
let str_1 = "Primera cadena de caracteres";
let st_2 = "Y yo soy la segunda cadena.";

console.log(str_1.concat(". ",st_2));
console.log(str_1+". "+st_2);
console.log(`${str_1} .${st_2}`);

//7.eliminar espacios
let str_3 = "     Cadena de caracteres4    ";
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

//8.Obtener caracter con su posicion
console.log(str_3.charAt(5));
console.log(str_3[6]);

//9.Obtener posicion de una palabra
let str_4 ="Hi, my name is Karina, My full name is Karina Pino, Karina";
console.log(str_4.indexOf("Karina"));
console.log(str_4.lastIndexOf("Karina"));

let text_extenso = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

//10. Buscar con el uso de expresiones regulares
console.log(text_extenso.match(/no/g));

//11. Verificar existencia de palabra en un texto
console.log(text_extenso.includes("ito"));

//12. Verificar si inicia con la palabra
console.log(text_extenso.startsWith("Ti"));

//13. Verificar fin
console.log(text_extenso.endsWith("."));