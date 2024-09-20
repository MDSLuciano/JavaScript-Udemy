/* 705.484.450-52    070.987.720-03

705484450  ->  Esses numero que estão sendo multiplicados
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

//Logo abaixo esta o digito que foi colocado acima 705.484.450-5 

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77   0  45  32  56  24  20  20  0   10 = 284

11 - (284 % 11) = 2 (Primeiro digito)
Se o numero digito for maior que 9, consideramos 0

1-Criar uma função que faça o calculo do digito verificador. Ok
2-Pegar o resultado da soma total dos valores do array. Ok
3-Fazer a conta para verificação. Ok
4-Verificar se o numero é maior que 9. Ok


5-Repetir os passos acima para descobrir o outro digito. Ok
6-Fazer a comparação para verificar se o numero é mesmo


*/


//

function multiplicador(cpf, multiplicador) {
    for(let i = 0; i < cpf.length; i++){
        cpf[i] = cpf[i] * multiplicador
        multiplicador--
    }
    return cpf
}

function descobrirDigito(valor) {
    let resultado = 11 - (valor % 11)
    if(resultado > 9){
        return 0
    }
    return resultado
}

let cpf = '705.484.450'
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = (Array.from(cpfLimpo))
let cpfNumero = cpfArray.map(Number)
let resultadoCpfsoma = [...cpfNumero]

multiplicador(resultadoCpfsoma, 10)

resultadoCpfsoma = resultadoCpfsoma.reduce((ac, val) => ac + val, 0)

resultadoCpfsoma = descobrirDigito(resultadoCpfsoma)

cpfNumero.push(resultadoCpfsoma)
resultadoCpfsoma = [...cpfNumero]

multiplicador(resultadoCpfsoma, 11)
resultadoCpfsoma = resultadoCpfsoma.reduce((ac, val) => ac + val, 0)

resultadoCpfsoma = descobrirDigito(resultadoCpfsoma)
console.log(resultadoCpfsoma);

cpfNumero.push(resultadoCpfsoma)
console.log(cpfNumero);






