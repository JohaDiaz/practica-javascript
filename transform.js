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


//He creado una función donde aplique "filter" para obtener solo los objetos "dato" que tengan dentro de las propiedades la clave "habilidades", y a su vez, se aplica "includes" para garantizar que tenga el valor "JavaScript" dentro de la propiedad habilidades. Los objetos dentro del array "datos" los he denominado developers. Con "filter" obtengo el dato.

const developersList = (dato) => {

    return dato.filter(developers => developers.habilidades.includes('JavaScript'));
    
};
const developersJavascript = developersList(datos);

console.log(developersJavascript);

//Una vez creada la función, debo inicializar un array vacio, donde se van a almacenar los nombres de los proyectos. Luego, aplico "map" a los objetos del array "datos", que me devuelve los datos con la clave "proyectos", y al mismo tiempo, aplico nuevamente "map" para obtener los valores de "proyectos". Con push, agrego los nombres de cada proyecto en el array "projectName".

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