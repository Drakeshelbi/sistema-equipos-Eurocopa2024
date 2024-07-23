/*Realizar un programa que calcule el precio fial de una compra con descuentso y agrege impuesos de
0 a 599 non aplica descuentos de 600 a 999 descuento de 5% de 1000 a 1999 descuento de 10%  de descunto 2000 en adelante del 15% una vez que enga el total 
15% una vez que tengas el total calcula el iva (16) y suma iva + total*/ 


let totalCompra = 1500; // Asigna el valor total de la compra

// Inicializar variables
let descuento;
let totalConDescuento;
const IVA = 0.16; // 16% de IVA

// Mapea el rango de totalCompra a una categoría de descuento
let categoriaDescuento;

if (totalCompra >= 600 && totalCompra <= 999) {
    categoriaDescuento = '5%';
} else if (totalCompra >= 1000 && totalCompra <= 1999) {
    categoriaDescuento = '10%';
} else if (totalCompra >= 2000) {
    categoriaDescuento = '15%';
} else {
    categoriaDescuento = '0%'; // No aplica descuento
}

// Aplicar el descuento basado en la categoría
switch (categoriaDescuento) {
    case '5%':
        descuento = 0.05;
        break;
    case '10%':
        descuento = 0.10;
        break;
    case '15%':
        descuento = 0.15;
        break;
    case '0%':
    default:
        descuento = 0;
        break;
}

// Calcular el total después de aplicar el descuento
totalConDescuento = totalCompra - (totalCompra * descuento);

// Calcular el IVA sobre el total después del descuento
let iva = totalConDescuento * IVA;

// Calcular el precio final sumando el IVA al total con descuento
let precioFinal = totalConDescuento + iva;

console.log("Total inicial: $" + totalCompra.toFixed(2));
console.log("Descuento aplicado: " + (descuento * 100) + "%");
console.log("Total con descuento: $" + totalConDescuento.toFixed(2));
console.log("IVA (16%): $" + iva.toFixed(2));
console.log("Precio final con IVA: $" + precioFinal.toFixed(2));
