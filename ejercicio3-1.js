//3.1 Ejercicio
/*Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:*/

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
];

const input2 = [
    'CodinGame',
    'python',
    'py',
];

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    
]

const getFileName = (list) => {
    const lastElement = list.length - 1;
    const extension = list[lastElement];
    const newList = [...list];
    newList.pop();
    return `${newList.join('/')}.${extension}`;
};

console.log(getFileName(input1));
console.log(getFileName(input2));
console.log(getFileName(input2));