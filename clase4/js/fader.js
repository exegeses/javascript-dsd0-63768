const caja = document.querySelector('#caja');

let alpha = 1;
let intervalo = '';

function down()
{
    //alpha = alpha - 1;
    alpha = alpha - 0.05;
    caja.style.opacity = alpha;
    console.log(alpha);
    if( alpha <= 0 ){
        clearInterval( intervalo );
        intervalo = '';
        alpha = 0;
    }
}
function up()
{
    alpha = alpha + 0.05;
    caja.style.opacity = alpha;
    console.log(alpha);
    if( alpha >= 1 ){
        clearInterval( intervalo );
        intervalo = '';
        alpha = 1;
    }
}

function fadeOut()
{
    intervalo = setInterval( down, 30 );
}
function fadeIn()
{
    intervalo = setInterval( up, 30 );
}