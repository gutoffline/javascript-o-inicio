let filmes = ['filme01.jpg','filme02.jpg','filme03.jpg']

let contador = 0
while(contador < 3){
    console.log(contador)
    document.write("<img src='imagens/" + filmes[contador] + "'>")
    contador = contador + 1
}
