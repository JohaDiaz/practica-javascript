//3.2 Ejercicio
/*Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:*/

const firstInput = 10; // '1-0'
const secondInput = 1; // '1'
const thirdInput = 11234; // '1-1-2-3-4'


const SplitArray = (input) => {
    let newString = input.toString();
    newArray = [...newString];
    return `${newArray.join("-")}`;
}

console.log(SplitArray(firstInput));
console.log(SplitArray(secondInput));
console.log(SplitArray(thirdInput));