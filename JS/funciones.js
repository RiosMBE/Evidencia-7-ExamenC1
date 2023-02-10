const llamadoFetch=()=>{
    fetch('/servicios.json')
    .then(respuesta=>respuesta.json())
    .then(data => mostrarDatos(data))
    .catch((reject) => {
        console.log("Ocurrió un error")
    })

    const mostrarDatos=(data=>{
        const res = document.getElementById("respuesta");
        res.innerHTML += 'idCliente' 
                        + 'codigo' 
                        + 'descripcion' 
                        + 'precioovta' 
                        + 'preciocompra';
    })

    document.getElementById('btnCargar').addEventListener('click', function(){
        llamadoFetch();
    })

    document.getElementById('btnLimpiar').addEventListener('click', function(){
        const r = document.getElementById("respuesta");
        r.innerHTML="";
    })
}