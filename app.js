let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if (window.responsiveVoice) {
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('#titulo', 'Adivinhe o <span class="container__texto-azul">número secreto</span>');
    exibirTextoNaTela('#mensagem', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    const chute = document.querySelector('#chute').value;

    if (chute === '') {
        exibirTextoNaTela('#mensagem', 'Digite um número antes de chutar!');
        return;
    }

    if (Number(chute) === numeroSecreto) {
        exibirTextoNaTela('#titulo', '🎉 Acertou!');
        const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        const mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('#mensagem', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('#mensagem', 'O número secreto é menor 👇');
        } else {
            exibirTextoNaTela('#mensagem', 'O número secreto é maior 👆');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    const numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    const quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista === numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    const chute = document.querySelector('#chute');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
