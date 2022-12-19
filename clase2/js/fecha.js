//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/*
    mostrar la fecha
    formato: Lunes 19/12/2022
*/

//creamos un objeto de fecha
let fecha = new Date();

/*
 día de la semana
   getDay()
  obtiene un número 
  0 -> Domingo
  1 -> Lunes
  2 -> Martes
  3 -> Miércoles
 */
let numDiaSemana = fecha.getDay();
console.log( numDiaSemana );
let diaSemana = '';
if ( numDiaSemana == 0 ){
    diaSemana = 'Domingo';
}
else if( numDiaSemana == 1 ){
    diaSemana = 'Lunes';
}
else if( numDiaSemana == 2 ){
    diaSemana = 'Martes';
}
else if( numDiaSemana == 3 ){
    diaSemana = 'Miércoles';
}
else if( numDiaSemana == 4 ){
    diaSemana = 'Jueves';
}
else if( numDiaSemana == 5 ){
    diaSemana = 'Viernes';
}
else{
    diaSemana = 'Sábado';
}


//obtenemos el número de día de mes
let diaMes = fecha.getDate();

//obtenemos en número de mes actual
let mesActual = fecha.getMonth() + 1;

//obtenemos en número de año actual
let anio = fecha.getFullYear();

//mostramos texto en el span (variante concatenación)
//txt.innerText = 'Hoy es: '+ diaSemana +' '+ diaMes +'/'+ mesActual +'/'+ anio;

//mostramos texto en el span (variante interpolación de variables)
/* también llamado template literals */
txt.innerText = `Hoy es: ${diaSemana} ${diaMes}/${mesActual}/${anio}`;


//  ${ nombreVariable }
