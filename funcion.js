function mostrarMensaje(){
    console.log('Hicieron click en el botón  '+ new Date().toLocaleTimeString())
}

// agregar un eventListener a otro botón

let boton = document.getElementById("otroBoton");
boton.addEventListener("click",()=>{console.log('hicieron click en el botón ')} )