var valores = [8,1,7,4,2,9]
    /*for (var pos = 0; pos < valores.length; pos++) { 
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
    } */         /*Esse codigo aqui é o caminho normal para mostras as posições dos vestores na tela */


    for(var pos in valores) { /* Essa é a forma simplificada, porem esse "FOR IN" serve apenas para vetores e arrays */
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }