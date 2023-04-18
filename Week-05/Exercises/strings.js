console.log('EXCERCISE 2: strings');

//a. Crear una variable de tipo string con al menos 10 caracteres 
//y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('Exercise 2.a');

var string1 = 'convertir todo el texto en mayuscula';

console.log(string1.toUpperCase());

//b. Crear una variable de tipo string con al menos 10 caracteres 
//y generar un nuevo string con los primeros 5 caracteres guardando 
//el resultado en una nueva variable (utilizar substring).

console.log('Exercise 2.b');

var string2 = 'nuevo string con los primeros 5 caracteres';

console.log('los cinco primeros caracteres del string: ', string2.substring(0,5));

//c. Crear una variable de tipo string con al menos 10 caracteres 
//y generar un nuevo string con los últimos 3 caracteres guardando 
//el resultado en una nueva variable (utilizar substring).

console.log('Exercise 2.c');

var string3 = 'nuevo string con los ultimos 3 caracteres';

console.log('los ultimos tres caracteres del string son: ', string3.substring((string3.length-3),string3.length));

//d. Crear una variable de tipo string con al menos 10 caracteres 
//y generar un nuevo string con la primera letra en mayúscula y 
//las demás en minúscula. Guardar el resultado en una nueva variable 
//(utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('Exercise 2.d');

var string4 = 'generar un nuevo string con la primera letra en mayuscula y las demas en minuscula';
var result = string4.substring(0,1).toUpperCase() + string4.substring(1, string4.length).toLowerCase();

console.log(result); 

//e. Crear una variable de tipo string con al menos 10 caracteres 
//y algún espacio en blanco. Encontrar la posición del primer espacio 
//en blanco y guardarla en una variable (utilizar indexOf).

console.log('Exercise 2.e');

var string5 = 'encontrar la posicion del primer espacio en blanco';
var result1 = string5.indexOf(' ');

console.log(result1);

//f. Crear una variable de tipo string con al menos 2 palabras largas 
//(10 caracteres y algún espacio entre medio). Utilizar los métodos de
//los ejercicios anteriores para generar un nuevo string que tenga la 
//primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
//(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('Exercise 2.f');

var string6 = 'arGenTinoS aRgeNtiNas';
var result2 = string6.substring(0,1).toUpperCase() + string6.substring(1,string6.indexOf(' ')).toLowerCase() +
string6.substring(string6.indexOf(' '), string6.indexOf(' ')+2).toUpperCase() +
string6.substring(string6.indexOf(' ')+2, string6.length).toLowerCase();

console.log(result2);