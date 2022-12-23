//ubicamos elemento dentro deo DOM
/* const txt = document.getElementById('txt'); */
const txt = document.querySelector('#txt');


//declaramos función de control
function reloj()
{
    /* reloj digital con formato 14:24:56 */
    //creamos un objeto de fecha
    const fecha = new Date();
    console.log( fecha );

    //obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();
    console.log( horas );

    //obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    console.log( minutos );

    //obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    console.log( segundos );

    //imprimimos el reloj en el span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}

//ejecutamos la función reloj
reloj();
/* alcualizamos el llamado a la función reloj */
setInterval( reloj, 1000 );
