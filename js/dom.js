// DOM -> documento Ojtect Model
// objeto que se llama "documento"

const subtitle = document.getElementById("subtitle")
console.log(subtitle) 

//if (subtitle !== null) { //diferecte en valor y tipo

if (subtitle) {
    subtitle.innerHTML= "<span style='color: violet'>Por Favor,</span> complete el formulario"
    subtitle.style.textDecoration = "underline"
}

// simplemente diferente solo valor -> !=
 //operador not

 const number=0


 if (number) {
    console.log("Soy un numero negativo")
 }