document.addEventListener('contextmenu', function( evento )
{
    //deshabilitamos
    evento.preventDefault();
    alert('no se puede copiear el contenido');
});