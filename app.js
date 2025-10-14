// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo - document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag) {
   let campo = document.querySelector(tag);
   campo.innerHTML = Texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function verifcarChute() {
    let chute = document.querySelector('input').value
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!');
    } else{
      if (chute > numeroSecreto){
         exibirTextoNaTela('p', O número secreto é menor);
      } else {
         exibirTextoNaTela('p', 'O número secreto é maior');
      }
    }
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}