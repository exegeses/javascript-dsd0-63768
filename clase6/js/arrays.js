const marcas = [
                'Hermes', 'Zara', 'Boss',
                'Aeropostale', 'Tommy', 'Hollister'
              ];

document.write( marcas );
console.log( marcas );

document.write('<hr>');

document.write( marcas[3] );

document.write('<hr>');

const semana = [
                    'Domingo', 'Lunes', 'Martes',
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
               ];

//cremos objeto de fecha
const fecha = new Date();
//obtenemos el número de día de la semana
let nDiaSemana = fecha.getDay();

//imprimimos en el documento
document.write( semana[ nDiaSemana ] );

