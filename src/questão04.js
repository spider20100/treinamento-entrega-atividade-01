import leia from "readline-sync"


var vitorias = leia.questionInt("informe o numero de vitorias: ") * 3
var empates = leia.questionInt("informe o numero de empates: ") * 1
var derrotas = leia.questionInt("informe o numero de derrotas: ") * 0

var pontuacao = (vitorias * 3) + (empates * 1) + (derrotas * 0);

if(pontuacao >= 70) {
    console.log("campeao")
}else if(pontuacao > 45 && pontuacao < 70) {
    console.log("classificado")
}else{
    console.log("rebaixado")
}

