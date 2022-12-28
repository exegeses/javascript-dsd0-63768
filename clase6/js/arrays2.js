//ubicamos elemento/s dentro del DOM
const auto = document.querySelector('#auto');
const txt = document.querySelector('#txt');
const boton = document.querySelector('#boton');

const listado = [];

//declaramos función de control
function cargarEnArray()
{
    /* captura el dato escrito en el span 
    y lo inserta en el array */
    listado.push( auto.value );

    console.log( listado );
    txt.innerText = listado;
}


/*boton.onclick = function()
                {
                    cargarEnArray();
                }
*/

boton.onclick = function cargarEnArray()
                    {
                        /* captura el dato escrito en el span 
                        y lo inserta en el array */
                        listado.push( auto.value );

                        console.log( listado );
                        txt.innerText = listado;
                    }
