
//metodo console 
console.log("Hello world!")

// declaracion de variables/constantes
// SCOPE == ALCANCE

// var -> scope global(puede ser modificada sin querer desde otros archivos) por ende no se utiliza

//ES2015 ->
// let-> scope de bloque, nos da mejor control de la variable, se puede reasignar un valor
// const -> scope de bloque, no se puede reasignar un valor (es la que mas usaremos)

var a = "hola"
console.log(a)
a = "chau"
console.log(a)
if (true) {
    console.log(a)
} 


let b 
console.log(b);
b = 55
console.log(b);
if (true) {
    console.log(b)
}

// en el browser con color violeta muestra number y color blanco strings

const c = 99
console.log(c)
console.log(c.toString())
