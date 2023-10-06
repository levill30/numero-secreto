let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
//numeroSecreto = 5
let tentativas = 1
function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}
function exibriMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'escolha um número entre 1 e 10');
}

exibriMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `acabou o jogo. Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'acertou')
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
        
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'tente de novo');
            exibirTextoNaTela('p', 'seu chute foi muito alto');
        }
        else{
            exibirTextoNaTela('h1', 'tente de novo');
            exibirTextoNaTela('p', 'seu chute foi muito baixo');
        }tentativas++
        limparCampo();
    }
    
    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosEscolhidos == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        //console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciar() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibriMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}