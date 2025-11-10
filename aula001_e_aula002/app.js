// Boas práticas
/*
- nomes significativos
- função não muito longas
*/

// Case sensitive
/* Diferenciar maiúsculas de minúsculas, Isso é diferente de isso */
console.log("olá mundo!")

// Sintaxe básica e comentário
// uma linha
/*
várias
linhas
*/

// Declaração de variáveis(var, let, const)
let nome = "Guto"
console.log("olá " + nome)
nome = "Xavier"
console.log(nome)

const idade = 39
console.log(idade)

// Console e Debug
// console.warn("atenção")
// console.info("informações")
// console.error("erro")


//Tipos de dados
/*
número - number
booleano - bool
texto - string
*/

//string
let cidade = "Americana"

//number
let salario = 2000

//bool

let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

console.log("----------------")
salario = "2000"
console.log(typeof salario)

// Operadores
//     Operador Atribuição ( = ) 
salario = 2500

//     Operadores aritméticos ( + , - , * , / , % )
let n1 = 10, n2 = 5
console.log(n1+n2) // soma
console.log(n1-n2) // subtração
console.log(n1*n2) // multiplicação
console.log(n1/n2) // divisão
console.log(10%3) // módulo

//     Operadores relacionais (== , != , > , < , >= , <=)
console.log(n1 == n2) // igual / igualdade
console.log(n1 != n2) // diferente
console.log(n1 > n2) // maior
console.log(n1 < n2)  // menor
console.log(n1 >= n2)  // maior ou igual
console.log(n1 <= n2) // menor ou igual

//     Operadores lógicos ! - não / NOT   || - ou / OR && - e / AND

let altura = 1.2
let peso = 80
let tipo = "criança"

// muda o resultado final, se for verdadeiro vira falso e se for falso vira veradeiro
console.log(!10>5)

// com || apenas uma verificação precisa ser verdadeira
console.log(altura > 1.5 || peso < 150 || tipo != "criança")

// com && todas as verificações devem ser verdeiras para o resultado final ser verdadeiro
console.log(altura > 1.5  && peso < 150 && tipo != "criança")

// Estrutura
//     Estrutura de controle/decisão
let carro = "fiat"
if(!(carro == "bmw")){
    console.log("vc ta bem mais ou menos") // verdadeiro
}else{
    console.log("A vida ta progredindo") // falso
}

let idadealuno = 20
if(idadealuno >= 18 ){
    console.log("maior de idade")
}else{
    console.log("menor de idade")
}

//     Laços de repetição
let controle = 1
while(controle <=10){
    console.log(controle)
    controle = controle + 1
}

controle = 1
while(controle <= 10){
    console.log(7*controle)
    controle = controle + 1
}


// Arrays --> vetor
let zoologico = ['leão', 'elefante', 'zebra', 'ariranha', 'lobo guará', 'arara']
console.log(zoologico[2])
console.log(zoologico.length)

let frutas = ['🍓','🍊','🍍','🍐','🍌','🍇','🍉']
console.log(frutas)
frutas.push('🍎')
console.log(frutas)

let alunos = []
alunos.push("joão")
alunos.push("renata")
alunos.push("roberto")
console.log(alunos)



// Funções personalizadas
function mensagem(){
    console.log("Olá")
    console.log("Seja bem vindo")
    console.log(" :) ")
}

mensagem()
mensagem()

function conta(horas, sal_hora){
    console.log(horas * sal_hora)
}

conta(140, 75)