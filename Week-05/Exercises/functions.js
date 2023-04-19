console.log('EXCERCISE 6: functions');

//a. Crear una función suma que reciba dos valores numéricos y 
//retorne el resultado. Ejecutar la función y guardar el resultado 
//en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('Exercise 6.a');

function suma(a, b) { 
    return a + b;
}

var result = suma (5, 15);
console.log(result);

//b. Copiar la función suma anterior y agregarle una validación para controlar 
//si alguno de los parámetros no es un número; de no ser un número, mostrar 
//un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('Exercise 6.b');

function suma(a, b) {
    if (typeof(a + b) == 'number') {
        return a + b;
}   
    else {
        alert('Error');
        return NaN;
    }
}

console.log (suma (15,35));
console.log (suma (5, '?'));

//c. Crear una función “validateInteger” que reciba un número como parámetro 
//y devuelva verdadero si es un número entero.

console.log('Exercise 6.c');

function validateInteger(a) {
    if (Number.isInteger(a)) {
        return true;
}  
    else {
        return false;
    }
}

console.log (validateInteger(15));

//d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada 
//a la función del ejercicio 6c. y que valide que los números sean enteros. 
//En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).

console.log('Exercise 6.d');

function sumaCopy(a, b) {
    if (!validateInteger(a)) {
        alert('el numero: ' + a + ' no es entero');
        a = Math.round(a);
}
    if (!validateInteger(b)) {
        alert('el numero: ' + b + ' no es entero');
        b = Math.round(b); 
}
    if (typeof(a) == 'number' && typeof(b) == 'number') {
        return (a + b);
}
    else {
        alert('Error');
        return NaN;
    }
}

console.log (sumaCopy (3.25, 1.5));
console.log (sumaCopy (5, 15));

//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro 
//de una nueva función probando que todo siga funcionando igual que en el apartado anterior.

console.log('Exercise 6.e');

function sumaCopy(a) {
    if (!validateInteger(a)) {
        alert('el numero: ' + a + ' no es entero');
        a = Math.round(a);

        return a;
    }
    else {
        return a;
    }
}

function sumaCopy1(a,b) {
    if (typeof(a) == 'number' && typeof(b) == 'number') {
        a = sumaCopy (a);
        b = sumaCopy (b);
        return (a + b);
    }
    else {
        alert ('Error');
        return NaN;
    }
}

console.log (sumaCopy1(1.5, 4.75));
console.log (sumaCopy1 (2.75, 5));