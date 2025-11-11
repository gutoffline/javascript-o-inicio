function fnJogo(){
    let chute = 0, numeroMagico = 3
    chute = document.getElementById("valor").value

    if(chute == numeroMagico){
        document.getElementById("resultado").innerText = "Acertou 😊"
    }else{
        document.getElementById("resultado").innerText = "Errou 😓"
    }

}

// 1 - como fazer um sorteio de número de 1 a 10 ao invés de deixar fixo o 3