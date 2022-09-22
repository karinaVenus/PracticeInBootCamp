// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre
let my_name = "Karina";
// - Otra cadena de texto con tu Apellido
let last_name = "Pino";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = my_name.concat(" ",last_name);
console.log(estudiante);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacio
let length_string = estudiante.length;
console.log(length_string);

// - Una variable que contenga la primera letra del Nombre
let first_letter = my_name.charAt(0);
console.log(first_letter);

// - Otra variable que contenga la última letra del Apellido
let last_lastname = last_name.charAt(last_name.length-1);
console.log(last_lastname);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let no_space = estudiante.replace(/ /g,"");
console.log(no_space);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let isExist = estudiante.includes("Karina");
console.log(isExist);