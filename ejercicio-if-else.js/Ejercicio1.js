/* realizar un programa que muestre una letra de acuerdo a la calificaci{on ontenia. Si el alumno saco de 90 a 100 
debe de mostrar la letra a, de 80 a 89 debe de mostrar la letra b, si el alumno saco de 70 a 79 mostrara la letra c,
 de 60 a 69 mostrar letra d y sino se encuentra en algun rango mecionado mostrar letra f */

 let calificacion = 66; // Asigna un valor a la variable calificacion

if (calificacion >= 90 && calificacion <= 100) {
  console.log("a");
} else if (calificacion >= 80 && calificacion <= 89) {
  console.log("b");
} else if (calificacion >= 70 && calificacion <= 79) {
  console.log("c");
} else if (calificacion >= 60 && calificacion <= 69) {
  console.log("d");
} else {
  console.log("f");
}


