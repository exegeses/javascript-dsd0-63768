const pulpo = document.querySelector('#pulpo');
pulpo.style.position = 'relative';

let direccion = 'derecha';
let posX = 0;

function movimientoX()
{
    if( direccion == 'derecha' ){
        posX++;
    }
    if( direccion == 'izquierda' ){
        posX--;
    }
    if( posX >= 400 ){
        direccion = 'izquierda';
    }
    if( posX <= 0 ){
        direccion = 'derecha';
    }
    pulpo.style.left = posX+'px';

    console.log( direccion );
    console.log( posX );
}

setInterval( movimientoX ) ;