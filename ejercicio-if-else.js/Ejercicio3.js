/* Realizar un programa que calcule el descuento de una compra 
dependiendo de los articulos comprados de 6 a 10 el descuento sera de 5%
de 11 a 20 el descuento es de 10%
y arriba de 20 el descuento es de 15%  si no alcanza los 5 articulos no aplicar el descuento*/



let articulosComprados = 15; // Asigna el número de artículos comprados

let descuento;

if (articulosComprados >= 6 && articulosComprados <= 10) {
    descuento = 0.05; // 5% de descuento
} else if (articulosComprados >= 11 && articulosComprados <= 20) {
    descuento = 0.10; // 10% de descuento
} else if (articulosComprados > 20) {
    descuento = 0.15; // 15% de descuento
} else {
    descuento = 0; // No aplica descuento
}

console.log("Descuento aplicado: " + (descuento * 100) + "%");

