// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let height_int = 150;

// - Una variable que contenga tu altura en metros (número de coma flotante)
let height_float = height_int/100;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let weight_float = 46.8;

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let height_up = Math.ceil(height_float);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let weight_down = Math.floor(weight_float);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor
// que se puede obtener en Javascript
let max_valor = Number.MAX_VALUE+1 === Number.MAX_VALUE;
