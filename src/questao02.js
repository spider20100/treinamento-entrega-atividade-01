import leia from "readline-sync"

var idade = leia.questionInt("quantos anos voce tem")
var estudante = leia.question("voce é estudante S/N")
var dia = leia.question("segunda, terca, quarta, quinta, sexta, sabado, domingo")

var valoringresso = 40;
var valordesconto = 0;
var valorcobrado = 0;

if(idade < 12){
valordesconto = valoringresso
}else{
    if(diasemana === 0)
var desconto = valoringresso - (valoringresso * 0.50);
        console.log("valor total: R$" + valoringresso.toFixed(2));
console.log("valor desconto: R$" + desconto.toFixed(2));
console.log("valor cobrado: R$" + (valoringresso - desconto).toFixed(2));
} else if(diasemana !== 0 && estudante === true) {
valordesconto = valoringresso * 0.30;
valorcobrado = valoringresso - valordesconto;
}else{
    valorcobrado - valoringresso
}

console.log("valor total: R$" + valoringresso.toFixed(2));
console.log("valor desconto: R$" + (valoringresso - 15).toFixed(2));
console.log("valor cobrado: R$" + (15).toFixed(2));




