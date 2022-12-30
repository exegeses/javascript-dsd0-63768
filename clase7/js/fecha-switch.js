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
let diaSemana = '';
switch( numDiaSemana ){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miércoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';
        break;
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
