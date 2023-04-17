listaVitorias = []

function setInitialValue() {
    // Get reference to the input element
    var myInput = document.getElementById("nvezes");

    // Set initial value to the input element
    myInput.value = 10000;
}

// Attach the setInitialValue function to the window.onload event
window.onload = setInitialValue;

var listaJogadas = []

//FUNÇÕES QUESTÃO 1

function jogarDado() {
    // Generate a random number between 1 and 6
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

function jogarCrap() {
    let i = 0;
    let fim = false;
    listaJogadas = [];
    let resultado = document.getElementById('resultadoJogo1');
    while (!fim) {
        let dado1 = jogarDado();
        let dado2 = jogarDado();
        listaJogadas.push(dado1 + dado2);
        if (i == 0) {
            if (listaJogadas[i] == 7 || listaJogadas[i] == 11) {

                fim = true;
                resultado.innerHTML = "Você venceu na primeira jogada";
                resultado.style.color = "darkgreen";
                resultado.style.fontWeight = "bold";
            } if (listaJogadas[i] == 2 || listaJogadas[i] == 3 || listaJogadas[i] == 12) {

                fim = true;
                resultado.innerHTML = "Você perdeu na primeira jogada";
                resultado.style.color = "darkred";
                resultado.style.fontWeight = "bold";
            }
        } else {
            if (listaJogadas[i] == listaJogadas[0]) {

                fim = true;
                resultado.innerHTML = `Você venceu na  rodada ${i + 1}.`;
                resultado.style.color = "darkgreen";
                resultado.style.fontWeight = "bold";
            }
            if (listaJogadas[i] == 7) {

                fim = true;
                resultado.innerHTML = `Você perdeu na rodada ${i + 1}.`;
                resultado.style.color = "darkred";
                resultado.style.fontWeight = "bold";
            }
        }
        i++;
    }
    document.getElementById("somas1").innerHTML = listaJogadas.toString();
}

function jogarCrap5Vezes() {//Alguns ajustes tiveram que ser feitos em relação à função acima
    let resultadoContainer = document.getElementById("resultadoJogo2");
    resultadoContainer.innerHTML = "";
    for (let j = 0; j < 5; j++) {
        let i = 0;
        let fim = false;
        listaJogadas = [];
        let resultado = document.createElement("p");
        let somas = document.createElement("span");
        somas.classList.add("bold");
        somas.innerHTML = "Jogadas: ";
        let jogadas = document.createElement("p");
        while (!fim) {
            let dado1 = jogarDado();
            let dado2 = jogarDado();
            listaJogadas.push(dado1 + dado2);

            if (i == 0) {
                if (listaJogadas[i] == 7 || listaJogadas[i] == 11) {
                    indicadorVencedor1 = true;
                    fim = true;
                    resultado.innerHTML = "Você venceu na primeira jogada";
                    resultado.style.color = "darkgreen";
                    resultado.style.fontWeight = "bold";
                } if (listaJogadas[i] == 2 || listaJogadas[i] == 3 || listaJogadas[i] == 12) {

                    indicadorVencedor1 = false;
                    fim = true;
                    resultado.innerHTML = "Você perdeu na primeira jogada";
                    resultado.style.color = "darkred";
                    resultado.style.fontWeight = "bold";
                }
            } else {
                if (listaJogadas[i] == listaJogadas[0]) {

                    fim = true;
                    indicadorVencedor1 = true;
                    resultado.innerHTML = `Você venceu na  rodada ${i + 1}.`;
                    resultado.style.color = "darkgreen";
                    resultado.style.fontWeight = "bold";
                }
                if (listaJogadas[i] == 7) {

                    fim = true;
                    indicadorVencedor1 = false;
                    resultado.innerHTML = `Você perdeu na rodada ${i + 1}.`;
                    resultado.style.color = "darkred";
                    resultado.style.fontWeight = "bold";
                }
            }
            i++;
        }
        jogadas.innerHTML = listaJogadas.toString();
        resultadoContainer.appendChild(resultado);
        resultadoContainer.appendChild(somas);
        resultadoContainer.appendChild(jogadas);
    }

}

function jogarCrapVariasVezes() {//Alguns ajustes tiveram que ser feitos em relação à função acima
    listaVitorias = []
    let n = +document.getElementById("nvezes").value;
    for (let j = 0; j < n; j++) {
        let i = 0;
        let fim = false;
        listaJogadas = [];

        while (!fim) {
            let dado1 = jogarDado();
            let dado2 = jogarDado();
            listaJogadas.push(dado1 + dado2);

            if (i == 0) {
                if (listaJogadas[i] == 7 || listaJogadas[i] == 11) {
                    listaVitorias.push(true);
                    fim = true;
                } if (listaJogadas[i] == 2 || listaJogadas[i] == 3 || listaJogadas[i] == 12) {
                    fim = true;
                    listaVitorias.push(false);
                }
            } else {
                if (listaJogadas[i] == listaJogadas[0]) {
                    fim = true;
                    listaVitorias.push(true);
                }
                if (listaJogadas[i] == 7) {
                    fim = true;
                    listaVitorias.push(false);
                }
            }
            i++;
        }
    }
    let vitorias = listaVitorias.filter(l => { return l }).length;
    document.getElementById("resultadoJogo3").innerHTML = `De ${listaVitorias.length} jogadas, você venceu ${vitorias}. O que significa que podemos estimar que a probabilidade de vitória é de ${(vitorias * 100) / listaVitorias.length}%`;
}

function calcularSaldo() {
    let soma = 0;
    listaVitorias.forEach(x => { soma = x ? soma + 1 : soma - 1 });
    document.getElementById("saldo").innerHTML = `Seu saldo final foi: ${soma}`;
}

//FUNÇÕES QUESTÃO 2

function sortearNumeros() {
    var numbers = [];
    while (numbers.length < 6) {
        var randomNumber = Math.floor(Math.random() * 60) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers.sort((a, b) => a - b);
}

function validarEscolhasSorteio() {
    let escolhas = [];
    for (let i = 1; i <= 6; i++) {
        let e = +document.getElementById(`escolha${i}`)?.value;
        if (escolhas.includes(e) && e != 0) {
            document.getElementById("alertaRepeticao").style.display = "block";
            return;
        } else {
            escolhas.push(e);
        }
    }
    document.getElementById("alertaRepeticao").style.display = "none";
}

function jogarMegaSenaQuina() {
    let numerosSorteados = sortearNumeros();
    let acertos = 0
    numerosSorteados.forEach((n, i) => {
        let e = +document.getElementById(`escolha${i + 1}`).value;
        acertos = numerosSorteados.includes(e) ? acertos + 1 : acertos;
    })
    document.getElementById("sorteados1").innerHTML = numerosSorteados.toString();
    document.getElementById("resultadoMegaSena1").innerHTML = `Você acertou ${acertos} número${acertos == 1 ? '' : 's'}`;
    //Eu propositalmente nem me preocupei em dizer se ele ganhou ou não, pois as chances são muito baixas.
    if (acertos == 5) {
        document.getElementById("resultadoMegaSena1").innerHTML += ", na quina!!";
    } else {
        document.getElementById("resultadoMegaSena1").innerHTML += ", não foi na quina.";
    }
}

function ateQuinaMegaSena(print = true) {
    let fim = false;
    let vezes = 0;
    let resultadoFinal;
    let numerosEscolhidos = [];
    for (let i = 1; i <= 6; i++) {
        numerosEscolhidos.push(+document.getElementById(`escolha${i}`).value);
    }
    while (!fim) {
        vezes += 1;
        let acertos = 0
        let numerosSorteados = sortearNumeros();
        numerosSorteados.forEach((n, i) => {
            acertos = numerosSorteados.includes(numerosEscolhidos[i]) ? acertos + 1 : acertos;
        })
        if (acertos >= 5) {
            fim = true;
            resultadoFinal = numerosSorteados;
        }

    }
    if (print) {
        document.getElementById("sorteados2").innerHTML = `Depois de ${vezes} sorteios, você conseguiu 5 ou mais acertos com o sorteio: ${resultadoFinal.toString()}`
    }
    return vezes;
}

function estimarMegaSenaQuina() {
    var vezes = [];
    document.getElementById("sorteando").style.display = "block";
    setTimeout(function () {
        for (let i = 0; i < 100; i++) {
            vezes.push(ateQuinaMegaSena(false));
        }
        document.getElementById("sorteados3").innerHTML = `A média de quantidades de sorteios necessários para conseguir pelo menos uma quina foi ${(vezes.reduce((a, b) => { return a + b }) / vezes.length)}, o que está bem próximo dos 150 mil calculados em sala.`
        document.getElementById("sorteando").style.display = "none";
    }, 100);
}

function ate4MegaSena(print = true) {
    let fim = false;
    let vezes = 0;
    let resultadoFinal;
    let numerosEscolhidos = [];
    for (let i = 1; i <= 6; i++) {
        numerosEscolhidos.push(+document.getElementById(`escolha${i}`).value);
    }
    while (!fim) {
        vezes += 1;
        let acertos = 0
        let numerosSorteados = sortearNumeros();
        numerosSorteados.forEach((n, i) => {
            acertos = numerosSorteados.includes(numerosEscolhidos[i]) ? acertos + 1 : acertos;
        })
        if (acertos == 4) { //Como ele quer exatamente 4, se ele tiver acertado 5 ou mais, ele ignora e continua tentando
            fim = true;
            resultadoFinal = numerosSorteados;
        }

    }
    if (print) {
        document.getElementById("sorteados4").innerHTML = `Depois de ${vezes} sorteios, você conseguiu exatamente 4 acertos com o sorteio: ${resultadoFinal.toString()}`
    }
    return vezes;
}

function estimarMegaSena4() {
    var vezes = [];
    document.getElementById("sorteando2").style.display = "block";
    setTimeout(function () {
        for (let i = 0; i < 10000; i++) {
            vezes.push(ate4MegaSena(false));
        }
        document.getElementById("sorteados5").innerHTML = `A média de quantidades de sorteios necessários para conseguir exatamente 4 acertos foi ${(vezes.reduce((a, b) => { return a + b }) / vezes.length)}.`
        document.getElementById("sorteando2").style.display = "none";
    }, 100);
}

//FUNCOES QUESTÃO 3



