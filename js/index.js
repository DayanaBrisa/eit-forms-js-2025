
//metodo console 
console.log("Hello world!")

// declaracion de variables/constantes
// SCOPE == ALCANCE

// var -> scope global(puede ser modificada sin querer desde otros archivos) por ende no se utiliza
 //  casi nunca var
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

//condiciones --> comparaciones =,<> etc devuelve/retorna un valor boolleand (V/F)

const condition1 = 1 === "1" //(al usar === preguntamos si es exactamente igual en valor y en tipo)
const condition2 = 1 == "1" //simplemente  igual (igual en valor)
console.log("condition1", condition1)
console.log("condition2", condition2)

const condition3 = 5 > 6
const condition4 = 5 < 6
const condition5 = 4 >= 4
const condition6 = 3 <= (1 + 2)
console.log("condition3", condition3)
console.log("condition4", condition4)
console.log("condition5", condition5)
console.log("condition6", condition6)


// operaciones matematicas

const suma = 10 + 30
const resta = 25 - 14
const multipl = 7 * 8
const division = 48 / 7
console.log("suma", suma)
console.log("resta", resta)
console.log("multipl", multipl)
console.log("division", division) 

//acumulador

console.log("Acumulador", ++suma)


//metodo concatenacon de Strings

const saludo = "HOla"
const saludoCompleto = saludo.concat("Como estas?")
console.log("saludocompleto", saludoCompleto )

//Bloques y Bucles --> estruccturas repetitivas

const x = 8 
const y = 8
//>mayor <menor
if (x > y) {
    console.log("x es mayor a y")
} else if (y > x) {
    console.log("y es mayor a X")
} else {
    console.log("Los valores son iguales")
}

/*let ovejas = 0
console.log("Cantidad de ovejas", ovejas)
++ovejas
console.log("Cantidad de ovejas", ovejas)
++ovejas
console.log("Cantidad de ovejas", ovejas) */

for (let ovejas= 0; /*cuando aca da F se deja de ejecular*/ovejas <50; ovejas++) {
    if (ovejas % 2 === 0) {//operacion matem -> modulo (devuelve el resto de la division)
        console.log("Cantidad de ovejas", ovejas)
    }
}

//concatenar strings
const userName = "Pedro Ezequiel"

//const greeting = "Hola" + userName + ", bienvenido!"
//const greeting = "Hola".concat(userName).concat(", bienvenido!")
const greeting = `Hola ${userName}, bienvenido!`

console.log(greeting)