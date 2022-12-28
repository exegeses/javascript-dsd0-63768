let n = 1;
while( n < 15 ){
    //bloque interno a iterar
    document.write( n + '<br>' );

    n++;
}

document.write('<hr>');

const marcas = [
    'Hermes', 'Zara', 'Boss',
    'Aeropostale', 'Tommy', 'Hollister',
    'Adidas', 'Topper', 'Puma', 'Nike'
  ];

//document.write( marcas[0] + '<br>' );  
let i = 0;
const cantidad = marcas.length;
document.write('<ul>');
while( i < cantidad ){
    document.write('<li>');
    document.write( marcas[ i ] );
    document.write('</li>');
    i++;
}
document.write('</ul>');