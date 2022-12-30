const enlace = document.querySelector('#enlace');

enlace.addEventListener('click', function( evento )
{
    //evitamos accón de enlace
    evento.preventDefault();
    let respuesta = confirm('¿Es mayor de edad¿');
    if( respuesta ){
        //ingresamos
        window.location = 'index.html';
    }
    else{
        //lo redirigimos a google
        window.location = 'https://www.google.com';
    }
});