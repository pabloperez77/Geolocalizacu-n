//alert('holi');
/*$(document).on('ready', function () {
    console.log('Hola jquery');
})*/

var element = $('.contenedor')[0];

$(element).on('click',function () {
    console.log('contenedor pulsado');
    $(element).addClass('red');
});

$('#id').empty();

console.log(element[0]);