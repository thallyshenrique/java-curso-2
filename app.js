// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo - document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag) {
   let campo = document.querySelector(tag);
   campo.innerHTML = Texto;
}

exibirTextoNaTela('h1')
exibirTextoNaTela('p')

function verifcarChute() {
    console.log(' O botão foi clicado!')
}