//bucles for

//inicializacion; condicion;actualizacion
for(let i=0; i<10; i++){     // i=i+1      i+=1
    //contenido del bucle
    console.log(i);
};

let lista =[1,2,3,4,5,6,3,7]
for(let i=0;i<lista.length;i++){
    console.log(lista[i]);
}
//for .. of
for(let ivalor of lista){
    console.log(ivalor);
}
//for .. each
lista.forEach(bvalor =>{
    console.log(bvalor);
})
//for .. in
let persona={
    name:"Karina",
    isDeveloper:true,
    age:25
}

console.log(persona["name"]);

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}