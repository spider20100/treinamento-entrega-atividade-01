import leia from "readline-sync"

var KwhGasto = leia.questionFloat("informe kwh gasto")
var temts = leia.question("tem tarifa social?")
var valorpagar = 0;

if(kwh <= 100) {
    valorpagar = KwhGasto * 0.60;
}else if(KwhGasto > 100 && KwhGasto <= 300){
    valorpagar = KwhGasto * 0.75
}else{
    valorpagar = KwhGasto * 0.90
}

var valorfinal = (temts === true) ? valorpagar - (valorpagar * 0.20) : valorpagar;
console.log("valor final a pagar: R$") + valorfinal