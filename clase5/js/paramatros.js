//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//declaramos función de control
function pintar( codigo )
{
    caja.style.backgroundColor = codigo;
}