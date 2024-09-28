// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
   const resultado = 10 >= 9; //comparar cuál es mayor o igual
    console.log(resultado); //Imprimir el resultado
    function compareTenAndNine() //ejecutar función
    
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    const resultado = 0 === =; // comprar si 0 es igual a 0 
    console.log(resultado); //imprimir resultado
    function compareZeroAndZero()// ejecutar función
}

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    const resultado = 7 > 8 && 7 < 10; // comprobar si 7 es mayor que 8 y menor que 10
    console.log(resultado); //imprimir resultado 
    function compareSeven() // llamando a la función
    
}

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
     const precio = 1500;
    const descuento = 0.25;
    const dineroDisponible = 1150;

    const precioFinal = precio * (1 - descuento);

    if (dineroDisponible >= precioFinal) {
        console.log("Puedes comprar el producto.");
    } else {
        console.log("No puedes comprar el producto.");
    }
}

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = " Hola JavaScript ";
    console.log = ("mensaje");
}
function createMessageVariable()

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2+3; //Definimos variable más suma
    console.log ("resultado"); 
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log ("IS_DISABLED"); //Constante
}
function createDisabledConstant();

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    led capacidad = null;
    console.log ("capacidad");  
}
function createNullVariable();

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let llamada dinero = undefined;
    console.log ("llamada dinero");
}

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
     let userName = "Ruth";
    console.log (typeof userName); //string
}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let dogId = "12345";  // cadena de texto
    console.log(typeof dogId);  // Imprimir el tipo de dato
}

checkDogIdIsString();  // Llamamos a la función 

}

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    console.log ("Hola, esto es un mensaje");
}
 logMessage();

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30; //variable
    console.log ("edad"); //resultado
}
logAge();

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    
    let version = 2024;  // Asignamos el valor 2024 
    console.log("La versión de JavaScript es " + version);  // Imprime el mensaje con el valor
}

logVersion();  // Llamamos a la función



// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};
