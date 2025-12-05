/** EJERCICIO 1: **
Crear una variable con un valor numérico libre:
const cantidadDeGatos = 10;
Esto debe generar en la consola lo siguiente:
```
Gato #1: 😺
Gato #2: 😸
Gato #3: 😹
Gato #4: 😺
Gato #5: 😸
Gato #6: 😹
Gato #7: 😺
Gato #8: 😸
Gato #9: 😹
Gato #10: 😺 */

const catsQuantity = 10
for(let cat = 1; cat <= catsQuantity; cat++) {
   const catString = "Gato #"
   const catWithNumber = catString.concat(cat).concat(":")
   let catComplete;
   if (cat % 3 === 1) {
       catComplete = catWithNumber.concat("😺")
   } else if (cat % 3 === 2) {
       catComplete = catWithNumber.concat("😸")
   }  else {
      catComplete = catWithNumber.concat("😹")
}
console.log(catComplete)
}

/*ejercicio 2
crtear 2 var con valores num libres
const cantidadDeGatos = 5;
const cantidadDePasos = 3;
la consola debe mostar:
gato #1:🐱🐾🐾🐾
asi hasta el gato5*/
const cantidadDeGatos = 5;
const cantidadDePasos = 3;

77for (let cat = 1; cat <= cantidadDeGatos; cat++) {
    const catString = "Gato #"
    const catWhithNumber = catString.concat(cat).concat(":")
}


const catsSteps = 5
for(let cat = 1; cat <= catsQuantity; cat++) {
   const catString = "Gato #"
   const catWithNumber = catString.concat(cat).concat(":")
   let catComplete = catWithNumber.concat("");
  
   for (let steps = 1; steps <= catsSteps; steps++) {
    
}
console.log(catComplete)}