function vaiJokenpo() {
    let pontuacao = 0;

    while (true) {
        let escolhaJogador = parseInt(prompt("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura"));

        if (escolhaJogador < 1 || escolhaJogador > 3 || isNaN(escolhaJogador)) {
            alert("Escolha inválida. Você perdeu.");
            console.log("Escolha inválida. Você perdeu.");
            break;
        }

        let pc = Math.floor(Math.random() * 3) + 1;
        let opcoes = ["Papel", "Pedra", "Tesoura"];
        let pcEscolha = opcoes[pc - 1];

        alert("O computador escolheu: " + pcEscolha);
        console.log("O computador escolheu: " + pcEscolha);

        if (escolhaJogador === pc) {
            alert("Empate! Vamos jogar novamente.");
            console.log("Empate! Vamos jogar novamente.");
        } else if (
            (escolhaJogador === 1 && pc === 2) || 
            (escolhaJogador === 2 && pc === 3) || 
            (escolhaJogador === 3 && pc === 1)    
        ) {
            pontuacao ++;
            alert("Você ganhou esta rodada! Sua pontuação é: " + pontuacao);
            console.log("Você ganhou esta rodada! Sua pontuação é: " + pontuacao);
        } else {
            alert("Você perdeu esta rodada. Sua pontuação final é: " + pontuacao);
            console.log("Você perdeu esta rodada. Sua pontuação final é: " + pontuacao);
            break;
        }
    }
}
vaiJokenpo();

/* Primeira tenttiva */

/* function jogar () {
    const computador = num(0,2);
    const jogador = document.querySelector("select").selectedIndex;
    
    if((computador == 0 && jogador == 2) ||
        (computador == 1 && jogador == 0) ||
        (computador == 2 && jogador == 1)){
            resultadoDaPartida("Você perdeu", computador);
    } else if ( computador == jogador ) {
        resultadoDaPartida("Empate!!", computador);
    } else {
        resultadoDaPartida("Você GANHOOOU!", computador);
    }
     //console.log(computador);
}

function resultadoDaPartida (mensagem, computador) {
    const opcoesPossiveis = ["Pedra", "Papel", "Tesoura"]
    document.querySelector("h5").innerHTML = mensagem;
    document.querySelector("p").innerHTML = "A Máquina Virtuosa escolheu:"+ opcoesPossiveis[computador];
}

function num(min, max) {
    return (Math.random() * (max - min) + min).toFixed();
}
 */

