/* Realizar unprograma que realize operaciones básicas matematicas segun el operador
(suma. resta, multiplicacion, dicion y tomar en cuenta que division entre 0 = 0 )*/

let num1 = 5; // Primer número
let num2 = 6;  // Segundo número
let operador = '*'; // Operador: puede ser '+', '-', '*', '/'

// Variable en donde se va a almacenar el resultado
let resultado;


switch (operador) {
    case '+':
        resultado = num1 + num2; // Suma
        break;
    case '-':
        resultado = num1 - num2; // Resta
        break;
    case '*':
        resultado = num1 * num2; // Multiplicación
        break;
    case '/':
        if (num2 === 0) {
            resultado = 0; // División entre 0
        } else {
            resultado = num1 / num2; // División
        }
        break;
    default:
        console.log("Operador no válido");
        break;
}

// Mostrar el resultado si es válido
if (resultado !== undefined) {
    console.log(`Resultado de ${num1} ${operador} ${num2} = ${resultado}`);
}
