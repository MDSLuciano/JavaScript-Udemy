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
*/


function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function(){
    //Verificação para ver se é um CPF
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1)//Adicionando o digito no array

    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo //Verificação se o Cpf está correto
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
//regressivo feito desse jeito irá fazer a conta de multiplicação diminuindo um 1
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    }, 0)
    
    const digito = 11 - ( total % 11);
    return digito > 9 ? '0' : String(digito) //Se digito for maior que 9 retorna 0 senão retorna digito
}

ValidaCPF.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length)
}



const cpf = new ValidaCPF('705.484.450-52')
console.log(cpf.valida('705.484.450-52'));
