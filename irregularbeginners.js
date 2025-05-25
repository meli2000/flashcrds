
let beginnersirregular=[

    {
        infinitivo:"Be / (am/is/are)",
        pasado:"Was / were",
        participio:"Been",
        significado:"Ser / estar",
        imagen:"ruta",
    },

    {
        infinitivo:"Become",
        pasado:"Became",
        participio:"Become",
        significado:"Llegar a ser",
        imagen:"ruta",
    },

    {
        infinitivo:"Begin",
        pasado:"Began",
        participio:"Begun",
        significado:"Empezar",
        imagen:"ruta",
    },
    
    {
        infinitivo:"Break",
        pasado:"Broke",
        participio:"Broken",
        significado:"Romper",
        imagen:"ruta",
    },
    {
        infinitivo:"Bring",
        pasado:"Brought",
        participio:"Brought",
        significado:"Traer, Llevar",
        imagen:"ruta",
    },
    {
        infinitivo:"Buy",
        pasado:"Bought",
        participio:"Bought",
        significado:"Comprar",
        imagen:"ruta",
    },
    {
        infinitivo:"Come",
        pasado:"Came",
        participio:"Come",
        significado:"Venir",
        imagen:"ruta",
    },
    {
        infinitivo:"Cut",
        pasado:"Cut",
        participio:"Cut",
        significado:"Cortar",
        imagen:"ruta",
    },
{
        infinitivo:"Do",
        pasado:"Did",
        participio:"Done",
        significado:"Hacer",
        imagen:"ruta",
    },
    {
        infinitivo:"Drink",
        pasado:"Drank",
        participio:"Drunk",
        significado:"Beber",
        imagen:"ruta",
    },
    {
        infinitivo:"Drive",
        pasado:"Drove",
        participio:"Driven",
        significado:"Conducir",
        imagen:"ruta"
    },
   {
        infinitivo:"Eat",
        pasado:"Ate",
        participio:"Eaten",
        significado:"Comer",
        imagen:"ruta",
    },
    {
        infinitivo:"Fall",
        pasado:"Fell",
        participio:"Fallen",
        significado:"Caer",
        imagen:"ruta",
    },

    {
        infinitivo:"Feel",
        pasado:"Felt",
        participio:"Felt",
        significado:"Sentir",
        imagen:"ruta",
    },

    {
        infinitivo:"Find",
        pasado:"Found",
        participio:"Found",
        significado:"Encontrar",
        imagen:"ruta",
    },
   {
        infinitivo:"Fly",
        pasado:"Flew",
        participio:"Flown",
        significado:"Volar",
        imagen:"ruta",
    },
    {
        infinitivo:"Forget",
        pasado:"Forgot",
        participio:"Forgotten",
        significado:"Olvidar",
        imagen:"ruta",
    },
    {
        infinitivo:"Get",
        pasado:"Got",
        participio:"Gotten",
        significado:"Obtener",
        imagen:"ruta"
    },
    {
        infinitivo:"Give",
        pasado:"Gave",
        participio:"Given",
        significado:"Dar",
        imagen:"ruta",
    },

   {
        infinitivo:"Go",
        pasado:"Went",
        participio:"Gone",
        significado:"Ir",
        imagen:"ruta",
    }

]

console.table(beginnersirregular)

function obtenerarray(beginnersIrregular){
    for (let i=0; i<beginnersIrregular.length; i++){
       const element=beginnersIrregular[i]; 
       console.log(element);
       
    }      
}


let obtener= obtenerarray(beginnersirregular)

// function getRandomItem ( arr ) { 
//     const índice = Math.floor ( Math.random ( ) * arr.length ) ; 
//     return arr [ índice ] ; 

// }​​​

// let azar= getRandomItem(beginnersirregular)
// console.log(azar)
//     i<irregular.length: Esta es la condición que se verifica antes de cada iteración del bucle. El bucle continuará ejecutándose mientras i sea menor que la longitud del array irregular.
//         irregular.length es una propiedad de los arrays que te devuelve cuántos elementos tiene el array. Por ejemplo, si tu array beginnersirregular tiene 3 verbos, irregular.length será 3.
//         El bucle se ejecutará para i = 0, i = 1, i = 2, y se detendrá cuando i sea 3 (porque 3 < 3 es falso).
//     i++: Después de cada iteración del bucle, esta parte se ejecuta y incrementa el valor de i en 1. Esto asegura que el bucle avance por todos los elementos del array.

// const element=irregular[i];:

//     Dentro de cada iteración del bucle, esta línea se ejecuta.
//     irregular[i]: Esto es cómo accedes a un elemento específico del array irregular usando su índice i.
//         En la primera iteración, i es 0, entonces irregular[0] te dará el primer objeto (el verbo "Be").
//         En la segunda iteración, i es 1, entonces irregular[1] te dará el segundo objeto (el verbo "Become"), y así sucesivamente.
//     const element = ...: El elemento recuperado del array se almacena en una nueva constante llamada element. Usamos const aquí porque element no cambiará su valor dentro de esa iteración específica del bucle.