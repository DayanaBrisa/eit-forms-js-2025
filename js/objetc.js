
//console es un objeto
// todo lo que declaremos son objetos -> que describe distintos valores en una misma cosa
const car = {
  brand: "Ford",
  model: "Fiesta",
  year: 2020,
  isAutomatic: true,
  doors: 4,
  start: () => console.log("El auto esta arrancando") //metodo, y aca declaramos la funcion interna del objeto
}

console.log(car)

const brandCar = car.brand
console.log(brandCar)  

car.start()

console.log(console)

