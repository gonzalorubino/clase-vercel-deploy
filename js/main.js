const button = document.getElementById('ubicame');
const coordinatesParagraph = document.getElementById('coordinates');

const geolocationFn = function(){
    if(navigator.geolocation){
        // si soporta geolocalizacion ejecuta este codigo
        navigator.geolocation.getCurrentPosition(function(position){
            coordinatesParagraph.innerHTML = `Latitude: <strong>${position.coords.latitude}</strong>, Longitud: <strong>${position.coords.longitude}</strong>`;
        })
    } else {
        // sino ejecuta esto:
        coordinatesParagraph.innerHTML = `Geolocalizacion no esta soportada en este browser`;
    }
}

button.addEventListener('click', geolocationFn );

document.querySelector('body').addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        geolocationFn();
        alert("llamado desde el ENTER!");
    };
});
