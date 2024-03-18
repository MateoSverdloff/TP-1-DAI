let palabra1 = "Mate";
let palabra2 = "Manu";
let textoSalida;

textoSalida = concatInvert(palabra1, palabra2);
console.clear();
console.log(`Texto de salida:"${textoSalida}"`);

function  concatInvert(palabra1, palabra2){
    let nuevoString = (palabra1 + palabra2);
    nuevoString = nuevoString.split("");
    return  nuevoString.reverse().join("");
}

// EJ02

