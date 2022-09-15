var variable_;
let variableLet_;

// const  constantes;
const constante="Hola constante"
console.log(constante);

var a =1;
console.log(a);

a=6;
console.log(a);

let b=4;
console.log(b);

b=6;
console.log(b);


var variable="hola soy una variable VAR";
for(var i=0; i<3; i++){
    var variable="hola soy la segunda variable VAR";
    console.log(variable);
}
console.log(variable);


let variableLet="hola soy una variable LET";
for(var i=0; i<3; i++){
    let variableLet="hola soy la segunda variable LET";
    console.log(variableLet);
}
console.log(variableLet);

console.log(typeof a);