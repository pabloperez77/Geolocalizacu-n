
if ("geolocation" in navigator){
    console.log('Existe geolocalizacion');
} else {
    console.log('No existe geolocalizacion');
}
/*function miFuncion(a,callback) {
    if(a){
        callback(a);
    } else {
        callback(undefined,'No existe el valor');
    }
}
miFuncion('a',function (res,err) {
   if(err) throw new Error ('La petición no ha funcionado')
   console.log('res->',res);
});*/
//navigator.geolocation.getCurrentPosition (
/*var watchID = navigator.geolocation.watchPosition(
    function(position){
    console.log(position.coords.latitude + ',' + position.coords.longitude );
}, function (error) {
    console.log(error);
},
    {
        enableHighAccuracy: true , //true/false
        timeout: Infinity, //en ms
        maximumAge: 0
    }
);
//console.log('id->',watchID);
setTimeout(function () {
    navigator.geolocation.clearWatch(watchID);
    console.log('Se ha cancelado el watch position')
},2000);

setInterval(function () {
   console.log('interval');
},1000);*/
function loop(ms,fechaAnterior) {
    var fechaActual = new Date().getTime();
    var desfase = (fechaActual-fechaAnterior) < 1000 ? 0 : (fechaActual-fechaAnterior)-ms;
    var nestTimer= ms-desfase;
    console.log('bucle', desfase);

    setTimeout(function () {
        loop(ms,fechaActual);
    },ms);
}