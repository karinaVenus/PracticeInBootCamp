
//IGUALDAD
let a = 9;
console.log(typeof a);
let b ="9";
console.log(typeof b);
// == solo comprara valor
if (a == b){
    console.log("a es igual a b - debil");
}
// === comprara valor y tipo
if (a === b){
    console.log("a es igual a b - fuerte");
}

//DESIGUALDAD
let c = 4;
console.log(typeof c);
let d = "4";
console.log(typeof d);

if (a != b){
    console.log("c es diferente a d - debil");
}
if (a !== b){
    console.log("c es diferente a d - fuerte");
}
