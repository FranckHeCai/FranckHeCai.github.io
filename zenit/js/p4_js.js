var cont=0;
function añadir() {
    cont++;
    localStorage.setItem('mas',cont);
    document.getElementById("contcarrito").innerHTML = localStorage.getItem('mas');
}
function vaciar() {
    cont=0;
    localStorage.setItem('mas',cont);
    document.getElementById("contcarrito").innerHTML = localStorage.getItem('mas');
    localStorage.clear();

}
function inicio() {
    cont = localStorage.getItem('mas');
    if(cont == null || isNaN(cont)){
        localStorage.setItem('mas',0);
    }
    document.getElementById("contcarrito").innerHTML = localStorage.getItem('mas');
}
function pos_actual(lat,lon){
    console.log("latitud--"+lat);
    console.log("longitud--"+lon);
}
function finalizar() {
    if (cont == 0) {
        alert("No tiene ningún producto seleccionado");
    } else {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(function(position)
                    {
                        pos_actual(position.coords.latitude, position.coords.longitude);
                        window.open("https://maps.google.com/?q=35.659088,139.700470");
                    });       
                        } else {
                            alert("No puede continuar con la compra ya que la localización no está disponible");
                        }
        
            }   
}
   
