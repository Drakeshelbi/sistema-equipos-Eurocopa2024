/* Realizar un programa que calcule el descuento de una compra 
dependiendo de los articulos comprados de 6 a 10 el descuento sera de 5%
de 11 a 20 el descuento es de 10%
y arriba de 20 el descuento es de 15%  si no alcanza los 5 articulos no aplicar el descuento*/


let articulosComprados = 15; // Asigna el número de artículos comprados

// Mapea la cantidad de artículos a una categoría de descuento
let categoriaDescuento;

if (articulosComprados >= 6 && articulosComprados <= 10) {
    categoriaDescuento = '5%';
} else if (articulosComprados >= 11 && articulosComprados <= 20) {
    categoriaDescuento = '10%';
} else if (articulosComprados > 20) {
    categoriaDescuento = '15%';
} else {
    categoriaDescuento = '0%'; // No aplica descuento
}

switch (categoriaDescuento) {
    case '5%':
        console.log("Descuento aplicado: 5%");
        break;
    case '10%':
        console.log("Descuento aplicado: 10%");
        break;
    case '15%':
        console.log("Descuento aplicado: 15%");
        break;
    case '0%':
        console.log("No aplica descuento");
        break;
    default:
        console.log("Cantidad de artículos no válida");
}
