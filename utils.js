function CalcularFecha(fecha){
    
    var dia1 = new Date();
    var dia2 = new Date(Date.parse(fecha));
    
    const arrayFecha = fecha.split("-");
    
    var diferencia = dia2 - dia1;
    
    if (diferencia > 0){
        var dias = Math.ceil(diferencia / (1000*3600*24));
        if (dias < 7){
        document.write('<span class="badge rounded-pill bg-warning text-dark">¡Se acaba pronto!</span>');
        } else {
        document.write("Te quedan solo " + dias + " días para disfrutar de esta oferta");
        }        
    } else {
        document.write('<span class="badge rounded-pill bg-danger">Oferta caducada</span>');
    }
}

function calcularValoracion(){
    let valUno = parseInt(document.getElementById("valUno").textContent);
    let valDos = parseInt(document.getElementById("valDos").textContent);
    let valTres = parseInt(document.getElementById("valTres").textContent);
    
    let valMedia = (valUno + valDos + valTres)/3;
    
     document.write("Valoración media: " + valMedia.toFixed(2));

    
}


