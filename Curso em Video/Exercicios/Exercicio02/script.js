function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
           img.setAttribute('src','imagens/crianmenino.png') 
           document.body.style.background ='#D5E6D9'
           document.body.style.color = ''
        } else if (idade < 21) {
           img.setAttribute('src','imagens/jovemhomem.png') 
           document.body.style.background ='#A79083'
        } else if (idade < 50 ) {
           img.setAttribute('src','imagens/adultohomem.png') 
           document.body.style.background ='#653E1A'
        } else {
           img.setAttribute('src','imagens/idosohomem.png') 
           document.body.style.background ='#999082'
        } 

        
    } else {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src','imagens/crianmenina.png')
            document.body.style.background = '#AF299F'
         } else if (idade < 21) {
            img.setAttribute('src','imagens/jovemmulher.png') 
            document.body.style.background = '#DB7869'
         } else if (idade < 50 ) {
            img.setAttribute('src','imagens/adultomulher.png')
            document.body.style.background = '#C99388'
         } else {
            img.setAttribute('src','imagens/idosamulher.png')
            document.body.style.background = '#D9AEB0'
         } 
 

    }
    res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
    res.style.textAlign ='center'
    res.appendChild(img)
    
}
