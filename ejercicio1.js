//ejercicio 1
/*Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes
campos:
- Nombre (el tuyo o inventado)
- Apellidos (el tuyo o inventado)
- Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas
de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
- Si estás en búsqueda activa con un valor de verdadero o false
En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del
objeto que hemos creado anteriormente.*/ 

const user = {
    name: 'Johanna',
    lastName: 'Diaz',
    workSearch: true,
    bootcampThemes: [
        {theme: 'Node.js', startDate:'2024-10-21'},
        {theme: 'Git', startDate:'2024-09-10'},
        {theme: 'React', startDate:'2024-12-16'},
    
    ],
    workSearch: true,
}

const bootcampProgram = user.bootcampThemes

console.log(user.bootcampThemes)

for (let bootcampThemes of bootcampProgram){
    if (bootcampThemes.theme === 'React'){
        document.write(`La fecha de inicio del tema ${bootcampThemes.theme} es el ${bootcampThemes.startDate}`);
    }
}
