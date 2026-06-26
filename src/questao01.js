import leia from "readline-sync"

var valor = leia.questionFloat("digite o valor da sua compra: R$");
var estado = leia.question("SP", "SC", "RS", "RJ", "PR")

if(valor > 500) {
    console.log("valor da compra e: R$" + valor.toFixed(2) + " e o frete e gratis");
}else {
    switch(estado) {
        case 0:
            case 1:
                case 2:
                    case 3:
                        console.log("o valor da compra: R$" + valor.toFixed(2) + "frete R$" + 400);
                        break;
                        case 4:
                            console.log("o valor da compra: R$" + valor.toFixed(2) + "frete R$" + 500)
                            break;
    }
}
