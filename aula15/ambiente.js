var num = [5,8,2] /* Temos 3 elementos, onde os indices são 0 , 1 , 2 nessa ordem, os indices começão pelo 0*/ 
num[3] = 6 /* Nesse caso, estamos adicionando o valor 6 para um novo indice, como anteriormente nossos indices vão de 0 a 2, o numero [3] entre chaves é para criamos um indice 3 com o valor 6.*/
num.push(9) /*Nesse caso assim como no exemplo acima estamos adicionando um valor para um novo indice,porem não estamos colocando o numero deste novo indice, o javascript já entende que depois do exemplo de cima, agora temos indicies que vão de 0 a 3 e ele cria automaticamente o proximo indice que seria o 4 e ja atribui o valor solicitado no comando nesse caso o 9.*/
num.length /*O length é um atributo e serve para ver o comprimento do meu vetor, ele identificar quantos elementos eu tenho dentro do meu vetor.*/ 
/* num.sort() Ele ordena todos o meus elementos em ordem crescente.*/ 
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(9) /* o num.indexOf() serve para localizar a posição ou o indice que está o valor digitado entre parenteses () .*/ 
if (pos == -1 ) {
    console.log('O valor não foi encontrado')
} else {
    console.log (`O valor procurado está na posição ${pos}`)
}
