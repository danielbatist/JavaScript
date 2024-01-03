function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

let listadeteclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listadeteclas.length; contador++) {

    let tecla = listadeteclas[contador];
    let instrumento = tecla.classList[1];
    let idAudio = `#som_${instrumento}`

    tecla.onclick = function() {
        tocaSom(idAudio)
    }    

} 

