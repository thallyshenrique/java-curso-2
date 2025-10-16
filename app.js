// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo - document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag) {
   let campo = document.querySelector(tag);
   campo.innerHTML = Texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function verifcarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = 'Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!';
        exibirTextoNaTela('p', mensagemTentativas);
        
    } else{
      if (chute > numeroSecreto){
         exibirTextoNaTela('p', 'O número secreto é menor');
      } else {
         exibirTextoNaTela('p', 'O número secreto é maior');
      }
      tentativas++;
      limparCampo();
    }
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
}