function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let cifrados = document.getElementById("mensaje");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if(texto.length != 0){
        document.getElementById("mensaje").value = textoCifrado;
        tituloMensaje.textContent = "Texto Encriptado con exito";
        parrafo.textContent = "";
        muneco.src = "./Imagenes/Exito.jpg";
    } else {
        muneco.src = "./Imagenes/Muñeco.svg"
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire({
            title: 'Error!',
            text: 'Ingresa algun texto',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }

}

function desencriptar (){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let cifrados = document.getElementById("mensaje");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")
    
    if(texto.length != 0){
        document.getElementById("mensaje").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        muneco.src = "./Imagenes/Saltando.jpg";
    } else {
        muneco.src = "./Imagenes/Muñeco.svg"
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire({
            title: 'Error!',
            text: 'Ingresa algun texto',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }

}

var botonCortar = document.querySelector('.btn-copiar');

botonCortar.addEventListener('click', function(event) {
  var contenido = document.querySelector('.mensaje');
  contenido.select();

  try {
    var resultado = document.execCommand('cut');
    console.log(resultado ? 'Contenido cortado' : 'No se pudo cortar el contenido');
  } catch(err) {
    console.log('ERROR al intentar cortar el contenido');
  }
});
   