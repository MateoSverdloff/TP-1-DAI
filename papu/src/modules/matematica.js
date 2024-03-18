let numeros = ["2", "4","8","10"];

const PI = 3.14;

const suma = (num1, num2) => num1 + num2;

const resta = (num1, num2) => num1 - num2;

function multiplicacion(num1, num2){
    let resultado = (num1 * num2);
    return resultado;
}

function division(num1, num2){
    let resultado = (num1 / num2);
    return resultado;
}

export{PI,suma, resta};  