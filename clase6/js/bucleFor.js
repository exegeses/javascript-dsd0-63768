for( let n = 1; n < 15; n++ ){
    //bloque a iterar
    document.write( n + '<br>' );
}

document.write('<hr>');

const marcas = [
    'Hermes', 'Zara', 'Boss',
    'Aeropostale', 'Tommy', 'Hollister',
    'Adidas', 'Topper', 'Puma', 'Nike'
  ];

const cantidad = marcas.length;

document.write('<ul>');
for(  let n = 0;  n < cantidad; n++  ){

    document.write( '<li>' + marcas[ n ] + '</li>' );

}
document.write('</ul>');