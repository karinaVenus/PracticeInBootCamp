// - factorial-break.js -> Este archivo debe calcular el factorial de 10 
// utilizando un bucle while, una bifurcación if y una sentencia break
let i=0
let numero=1;

while(true){
    console.log(numero);
    numero=(i+1)*numero;
    i++;
    if(i===10){
        break
    }
}
console.log("El factorial de 10 es: ",numero);