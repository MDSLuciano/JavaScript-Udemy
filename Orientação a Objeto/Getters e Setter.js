// Para prevenir que alguem altere o valor na mão porque o Symbol, nunca
// é igual ao outro
const _velocidade = Symbol('velocidade')

class Carro {
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }
// Vamos definir o que o usuario realmente pode alterar, passando as condições.
    set velocidade(valor){
        console.log("SETTER");
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }

// Para acessar o valor da velocidade vamos colocar no get.Por causa do Symbol que nunca um é igual ao outro
    get velocidade(){
        console.log("GETTER");
        return this[_velocidade]
    }

    acelerar(){
        if(this[_velocidade] >= 100)return
        this[_velocidade]++
    }

    freiar(){
        if(this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')

console.log(c1.velocidade);
