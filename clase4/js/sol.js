const sol = document.querySelector('#sol');

let grados = 0;


function rotar()
{
    grados++;
    sol.style.transform = 'rotate('+grados+'deg)';
}

setInterval( rotar, 60 );