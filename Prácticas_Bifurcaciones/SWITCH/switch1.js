// Mismo programa pero con switch
let calificacion = 77; // Asigna un valor a la variable calificacion

// Mapea el rango de calificación a un valor categórico
let categoria;

if (calificacion >= 90 && calificacion <= 100) {
    categoria = 'a';
} else if (calificacion >= 80 && calificacion <= 89) {
    categoria = 'b';
} else if (calificacion >= 70 && calificacion <= 79) {
    categoria = 'c';
} else if (calificacion >= 60 && calificacion <= 69) {
    categoria = 'd';
} else {
    categoria = 'f';
}

switch (categoria) {
    case 'a':
        console.log("a");
        break;
    case 'b':
        console.log("b"); 
        break;
    case 'c':
        console.log("c");
        break;
    case 'd':
        console.log("d");
        break;
    case 'f':
        console.log("f");
        break;
}



