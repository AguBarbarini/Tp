function cambiartexto(){
    let element = document.getElementById("Button");
    if (element.value=="Seguir"){
        element.value = "Dejar de seguir";
    } else {
        element.value = "Seguir";
    }
}

function sumarUno(){
    let contador;
    if(document.getElementById("contador").value == "200")
    {
        let valorVista = parseInt(document.getElementById("contador").value);
        contador = valorVista + 1;
    }
    document.getElementById("contador").value=contador.toString();
}

