//listas
const list1 = [4,"hola",true,undefined,null];
const list2 = new Array(4,"hola",true,undefined,null);
const list3 = new Array(2);
const list4 = [list1,list2,list3];

console.log(list1);
console.log(list2);
console.log(list3);
console.log(list4);

//objetos
const movil ={
    height: 10,
    width: 5,
    brand: "samsung",
    isNew:false,
    colors:["white","black","gray"],
    batery:{
        voltage:16,
        brand:"samsg"
    }

}

console.log(movil.batery.brand);
console.log(movil.brand);

movil.anio = 2019;         //agregar mas atributo

movil.brand = "motorola";  //cambiar valor
console.log(movil.brand);

//fecha
const fechaActual = new Date();
console.log(fechaActual);

const fecha_mseg = new Date(10);
console.log(fecha_mseg);

const fecha_string = new Date("16 September 2020");
console.log(fecha_string);

const fechaFull = new Date(2020,1,7);
console.log(fechaFull);

const day = fechaActual.getDate();
const month = fechaActual.getMonth();
const year = fechaActual.getFullYear();
console.log(day, month, year);