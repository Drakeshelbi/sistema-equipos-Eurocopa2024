/* Realizar unprograma que realize operaciones básicas matematicas segun el operador
(suma. resta, multiplicacion, dicion y tomar en cuenta que division entre 0 = 0 )*/

let num1 = 15; // Primer número
let num2 = 4;  // Segundo número (este puede ser cualquier número, aquí está configurado para probar la división entre 0)
let operador = '+'; // Operador: puede ser '+', '-', '*', '/'

// Variable para almacenar el resultado
let resultado;

// Realizar la operación matemática basada en el operador
if (operador === '+') {
    resultado = num1 + num2; // Suma
} else if (operador === '-') {
    resultado = num1 - num2; // Resta
} else if (operador === '*') {
    resultado = num1 * num2; // Multiplicación
} else if (operador === '/') {
    if (num2 === 0) {
        resultado = 0; // División entre 0
    } else {
        resultado = num1 / num2; // División
    }
} else {
    console.log("Operador no válido");
}

// Mostrar el resultado si es válido
if (resultado !== undefined) {
    console.log(`Resultado de ${num1} ${operador} ${num2} = ${resultado}`);
}
