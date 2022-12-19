//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/*
    mostrar la fecha
    formato: Lunes 19/12/2022
*/

//creamos un objeto de fecha
let fecha = new Date();

//obtenemos el número de día de mes
let diaMes = fecha.getDate();

//obtenemos en número de mes actual
let mesActual = fecha.getMonth() + 1;

//obtenemos en número de año actual
let anio = fecha.getFullYear();

//mostramos texto en el span (variante concatenación)
txt.innerText = diaMes +'/'+ mesActual +'/'+ anio;

//mostramos texto en el span (variante interpolación de variables)
txt.innerText = `${diamess}/${mesActual}/${anio}` // backtick ` 

///  ${ nombreVariable }


