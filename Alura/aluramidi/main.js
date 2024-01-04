function tocaSom (seletorAudio) {

   let elemento = document.querySelector(seletorAudio);

   if (elemento != null && elemento.localName === 'audio') {
        elemento.play();    
   } else {
        console.log('Elemento não encontrado')
   }

   }

let listadeteclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listadeteclas.length; contador++) {

    let tecla = listadeteclas[contador];
    let instrumento = tecla.classList[1];
    let idAudio = `#som_${instrumento}`

    tecla.onclick = function() {
        tocaSom(idAudio)
    }    

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space'|| evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function (evento) {
    
            tecla.classList.remove('ativa')
        
    }

} 

