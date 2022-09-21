//strings estaticos
let str_comillas = "El gato dijo \"Hola humano\"";
let str_comillas_simples = 'El gato dijo: "Hola humano"';

console.log(str_comillas);
console.log(str_comillas_simples);

// Comillas invertidas:
// backticks, para plantillas html
// permite introducir variables dentro del string ${NombreVariable}

let nombre = "Karina";
let saludo = `Hola , ${nombre}`;
console.log(saludo);

let plantilla =`
<html>
    <h1>Tittle 1</h1>
    <p>Este es un parrafo</p>
</html>
`;
console.log(plantilla);
//variables en html
let book = ["Book1","Book2","Book3"];