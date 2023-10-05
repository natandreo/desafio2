function calculadora(quantiVitorias, quantiDerrotas) {
    return quantiVitorias - quantiDerrotas;
}

let quantiVitorias = 190;
let quantiDerrotas = 70;

let pontuacao = calculadora(quantiVitorias, quantiDerrotas);
let rank

switch (true) {
    case pontuacao <=10:
        rank = "Ferro"
        break
    case pontuacao >=11 && pontuacao <= 20: 
        rank = "Bronze"
        break
    case pontuacao >=21 && pontuacao <= 50: 
        rank = "Prata"   
        break
    case pontuacao >=51 && pontuacao <= 80: 
        rank = "Ouro"
        break
    case pontuacao >=81 && pontuacao <= 90:
        rank = "Diamante"
        break
    case pontuacao >=91 && pontuacao <= 100:
        rank = "Lendário"
        break
    case pontuacao >=101:
        rank = "Imortal"
        break
    default:
        rank = "Indefinido."
}

console.log("O Herói tem de saldo de " + pontuacao + " e está no nível de " + rank + ".")