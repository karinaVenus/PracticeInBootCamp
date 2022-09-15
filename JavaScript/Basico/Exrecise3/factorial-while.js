// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
let i=0
let numero=1;

while(i<10){
    numero=(i+1)*numero;
    i++;
}
console.log("El factorial de 10 es: ",numero);