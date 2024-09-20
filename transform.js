//Ejercicio 4
/*Transformaciones con map y filter
Nuestro cliente tiene un array de datos y nos ha pedido que saquemos la siguiente
información. El listado de los desarrolladores que tengan como habilidad “JavaScript” y el
listado de los proyectos en el que sus desarrolladores trabajan.*/
//Estos son los datos:

const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['Python', 'Django', 'SQL'],
        proyectos:[ 
            { id: 1, nombre: 'Proyecto 1'},
            { id: 2, nombre: 'Proyecto 2'}
        ]
    },
    {
        id: 2,
        nombre: 'Johanna',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos:[ 
            { id: 1, nombre: 'Proyecto 3'},
            { id: 2, nombre: 'Proyecto 4'}
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos:[ 
            { id: 1, nombre: 'Proyecto 5'},
            { id: 2, nombre: 'Proyecto 6'}
        ]
    }
];

const developersList = (dato) => {
    return dato.filter(developers => developers.habilidades.includes('JavaScript'));
};
const developersJavascript = developersList(datos);

console.log(developersJavascript);


const projectsList = (dato) => {
        const projectsName = [];
        dato.map(developers => {developers.proyectos.map(proyecto => {
            projectsName.push(proyecto.nombre);
        });
    });

    return projectsName;

};
const totalListProject = projectsList(datos);

console.log(totalListProject);