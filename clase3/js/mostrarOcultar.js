//ubicar elemento dentro del DOM
const caja = document.getElementById('caja');

//declaramos función/es de control
function ocultar()
{
    caja.style.visibility = 'hidden';    
    //caja.style.display = 'none';
}

function mostrar()
{ 
    caja.style.visibility = 'visible';
    //caja.style.display = 'block';
}

function ocultarMostrar()
{
    // si no se ve
    if( caja.style.visibility == 'hidden' )
    {
        mostrar();
    }
    else{
        ocultar();
    }
}
    