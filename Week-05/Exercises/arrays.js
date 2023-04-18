console.log('EXCERCISE 3: arrays');

//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
//"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por 
//consola los meses 5 y 11 (utilizar console.log).

console.log('Exercise 3.a');

var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log('el mes 5 es: ' + month[4] + '. el mes 11 es: ' + month[10] + '.');

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('Exercise 3.b');

month.sort();

console.log('meses en orden alfabético: ', month);

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('Exercise 3.c');

month.unshift('un mes al principio');
month.push('un mes al final');

console.log(month);

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('Exercise 3.d');

month.shift();
month.pop();

console.log(month);

//e. Invertir el orden del array (utilizar reverse).

console.log('Exercise 3.e');

month.reverse();

console.log(month);

//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('Exercise 3.f');

console.log(month.join('-'));

//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('Exercise 3.g');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(months.slice(months.indexOf('Mayo'), months.indexOf('Noviembre')+1));