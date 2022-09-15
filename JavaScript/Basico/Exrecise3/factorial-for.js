// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
let factorial=1;

for(let i=0;i<10;i++){
    factorial = (i+1)*(factorial);
    console.log(i);
    console.log(factorial);
}   
console.log("El factorial de 10 es: ",factorial);