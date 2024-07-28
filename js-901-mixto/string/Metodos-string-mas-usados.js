// Metodos mas usados con string

// Como obtener la longuitud de un String
let str_1 = "Hola soy un String";

console.log(str_1.length); // length es el atributo de la cadena

/** Obtener partes de un String
 * slice()
 * substring()
 * substr()
 */

let slice_str_1 = str_1.slice(0, 4);
console.log(slice_str_1);

let substring_str_1 = str_1.substring(0, 5);
console.log(substring_str_1);

//Reemplazar parte de una cadena
let cadena  = "Hola mi nombre es Jose";
console.log(cadena);
//Solo reemplaza la primera que encuentra
console.log(cadena.replace('Jose', 'Manuel'));

//Dar un ejemplo con teto largo
let texto_largo = "";

console.log(texto_largo.replace('',''))

//Utilizar la expresion /g {global} reemplaza todas las instancias
console.log(texto_largo.replace(/texto/g, ''))