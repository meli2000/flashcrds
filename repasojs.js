let frutas=["manzana","pera","Durazno","melocoton","naranjilla"];

console.log(frutas.length)

// declarar array y asignar una longitud
const arraay= new Array(3)

// Asignar valor a posiicion de array
arraay[0]="hola"
array[1]="como"
array[2]="estas"

// Puedo asignar sean string, numeros, otro array o un objeto


// metodos de array

array.push   //Agrega un nuevo elemento al final del array
array.pop   //Elemina el ultimo elemento del array
array.unshift() //agrega unnuevo elemento al principio del array
array.shift  //Elimina el primer elemento del array
array.indexOf() // Devuelve el índice de la primera aparición de un elemento en el array. 
array.lastindexOf() //Devuelve el índice de la última aparición de un elemento en el array !!!
array.slice(inicio , fin) //Copia una parte del array en un nuevo array. inicio y fin son índices, y el elemento en fin no se incluye 
array.splice(inicio,eliminar, elementos) //Elimina elementos de un array y remplaza con nuevos
forEach(callback) //ejecuta una funcion por cada elemento del array
array.map(callback) //Crea un nuevo array con
array.sort() //ordena array, ordena tanto numeros como alfabeto   !!!!

let array=["despertarse","comer","Estudiar,","dormir"]
let texto=''
for (let index=0;index<array.length;index++){

    texto+="<li>"+array[index]+'<li>'
}
document.getElementById('seleccionable').innerHTML=texto

texto='<li>Despertarse</li>'


// metodo map retorna un nuevo array

let nuevo=arr.map((Element)=>{
    console.log(Element);
})

// modifica el original 
arr.forEach((Element)=>{
    console.log(Element)
}


)


para exportar se una un (declarar variable atributos objeto)= require("./datos");


valores paso por referencia y por valores
// copia suoerfucial de objeto

let arrray=[1,2,3,4];
let nuw=[...arraay];



