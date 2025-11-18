// criar 2 arrays, um com as fotos e outro com o nome
// relacionar a foto com o nome e com o número
let nomes = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard']
let fotos = [
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png'
]

let indice = 0
document.getElementById("pokemon_foto").src = fotos[indice]
document.getElementById("pokemon_nome").innerText = nomes[indice]
document.getElementById("pokemon_numero").innerText = indice + 1

function fnPesquisarNumero() {
    let pokemon_procurado = document.getElementById("pokemon_procurado").value
    document.getElementById("pokemon_foto").src = fotos[pokemon_procurado - 1]
    document.getElementById("pokemon_nome").innerText = nomes[pokemon_procurado - 1]
    document.getElementById("pokemon_numero").innerText = pokemon_procurado
}

function fnProximo() {
    if(indice < nomes.length - 1){
        indice = indice + 1
        document.getElementById("pokemon_foto").src = fotos[indice]
        document.getElementById("pokemon_nome").innerText = nomes[indice]
        document.getElementById("pokemon_numero").innerText = indice + 1
    }
}

function fnAnterior() {
    // criar 
    // não pode ser menor que 0
}

// colocar a musica do pokemon de fundo