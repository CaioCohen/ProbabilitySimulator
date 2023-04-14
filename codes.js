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
    let n  = +document.getElementById("nvezes").value;
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
    let vitorias = listaVitorias.filter(l => {return l}).length;
    document.getElementById("resultadoJogo3").innerHTML = `De ${listaVitorias.length} jogadas, você venceu ${vitorias}. O que significa que podemos estimar que a probabilidade de vitória é de ${(vitorias*100)/listaVitorias.length}%`;
}

function calcularSaldo(){
    let soma = 0;
    listaVitorias.forEach(x =>{soma = x ? soma + 1 : soma - 1});
    document.getElementById("saldo").innerHTML = `Seu saldo final foi: ${soma}`;
}

