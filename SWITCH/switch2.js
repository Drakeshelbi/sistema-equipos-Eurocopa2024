/*realizar un programa que muestre los dias de la semana de acuerdo a los
 numeros de 1 al 7 lunes es 1 y domingo es 7  metodo switch*/

 let dia = 3; // Asigna un número para saber el día de la semana

switch (dia) {
    case 1:
        console.log("LUNES");
        break;
    case 2:
        console.log("MARTES");
        break;
    case 3:
        console.log("MIERCOLES");
        break;
    case 4:
        console.log("JUEVES");
        break;
    case 5:
        console.log("VIERNES");
        break;
    case 6:
        console.log("SABADO");
        break;
    case 7:
        console.log("DOMINGO");
        break;
    default:
        console.log("Número de día no válido");
}


