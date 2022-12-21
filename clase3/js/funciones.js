//ubicamos elemento/s dentro dle DOM
const caja = document.getElementById('caja');

/* código sin interactividad
caja.style.backgroundColor = '#f60';
caja.innerText = 'Naranja';
caja.style.border = '#800 solid 1px';
*/

//declaramos funcion/es de control
function pintarVerde()
{
    caja.style.backgroundColor = '#0a2';
    caja.innerText = 'Verde';
    caja.style.border = '#080 solid 1px';
}
function pintarNaranja()
{
    caja.style.backgroundColor = '#ff6600';
    caja.innerText = 'Naranja';
    caja.style.border = '#800 solid 1px';
}