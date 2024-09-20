//3.3 Ejercicio
/*Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:*/

const input1 = 'string'; // '6 gnirts'
const input2 = 'variable'; // '8 elbairav'
const input3 = 'pointer'; // '7 retniop'

const reverseArray = (input) => {
    return `${input.length} ${input.split("").reverse().join("")}`;
}

console.log(reverseArray(input1));
console.log(reverseArray(input2));
console.log(reverseArray(input3));