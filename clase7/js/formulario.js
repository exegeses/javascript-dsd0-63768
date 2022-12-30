const formulario = document.querySelector('#formulario');
const campoNombre = document.querySelector('#campoNombre');
const msjError = document.querySelector('#msjError');

formulario.addEventListener('submit', function( evento )
{
    //evitamos envío de form
    evento.preventDefault();

    //obtenemos el VALOR escrito en el campoNombre
    let nombre = campoNombre.value;
    //si está vació
    if( nombre == '' || nombre == null ){
        //mostramos mensaje de error
        msjError.innerText = 'Complete el campo Nombre';
    }
    else{
        //enviamos el formulario
        formulario.submit();
    }
});