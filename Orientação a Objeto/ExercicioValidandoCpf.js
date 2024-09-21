class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {//Aqui criamos o valor de this.cpfLimpo e já colocamos as suas propriedades
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    éSequência(){
        this.cpfLimpo[0].repeat(11)
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        this.novoCpf = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos){
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica)
            reverso--
        }

        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : 0
    }

    valida(){
        if(!this.cpfLimpo) return false//Verifica se meu cpfLimpo existe
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.éSequência()) return false
        this.geraNovoCpf()
        console.log(this.novoCpf);
        
        return this.novoCpf === this.cpfLimpo 
    }
}

const validaCpf = new ValidaCPF('070.987.720-03')
console.log(validaCpf);

console.log(validaCpf.valida());

if(validaCpf.valida()){
    console.log('Cpf válido');
}else {
    console.log('Cpf inválido');
}
