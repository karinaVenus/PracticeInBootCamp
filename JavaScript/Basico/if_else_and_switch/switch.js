//sentencia switch

let nota = 5;
switch(nota){
    case 5:
        console.log("Excelente");
        break;
    case 4:
        console.log("Bueno");
        break;
    case 3:
        console.log("Regular");
        break;
    case 2:
        console.log("Malo");
        break;
    case 1:
        console.log("Muy malo");
        break;
    default:
        console.log("Error, Ingresar nota entre 1 - 5");
        break;
}