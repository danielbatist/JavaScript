function contador(){
    var inicio = document.getElementById('txtin')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpass')
    var res = document.getElementById('res')
        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            alert('[ERRO] Faltam dados!')    
        } else {
            res.innerHTML = 'Contando: '
            var i = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)
        
             if (i < f) { //Crescente
                for (var c = i ; c <= f ; c += p) {
                    res.innerHTML += `${c} \u{1F449}` 
                }
                
            } else {     // Decrescente
                for (var c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            res.innerHTML += '\u{1F3C1}'
            
            
            
            /*if (Number(inicio.value) < Number(fim.value) ) {
                for (var c = Number(inicio.value); c <= Number(fim.value) ; c += Number(passo.value) ) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            } else {
                for (var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)) {
                    res.innerHTML += `${c} \u{1F449}`
                } 
            }
            res.innerHTML += '\u{1F3C1}'*/
            
           
        }
    

    
} 