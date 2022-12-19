//ubicamos elmento dentro del DOM
const contenedor = document.getElementById('contenedor');

//hacerle una pregunta al usuario y almacenarla en una variable
let respuesta = prompt('¿que selección ganó el mundial Qatar 2022');

if( respuesta == 'Argentina' || respuesta == 'argentina' ){
    //bloque a ejecutar si la condición es true
    //contenedor.innerText = 'correcto';
    contenedor.innerHTML = '<img src="imgs/ok.png">'
}
else{
    //bloque a ejecutar si la condición es false
    //contenedor.innerText = 'incorrecto';
    contenedor.innerHTML = '<img src="imgs/error.png">'
}



