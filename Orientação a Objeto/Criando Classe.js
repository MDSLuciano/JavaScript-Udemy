class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
//  Instancias (Prototype)
    falar(){
        console.log(`${this.nome} está falando`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }

}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando`);
}

const pessoa = new Pessoa('Luciano', 'Machado')
const pessoa2 = new Pessoa2('Marcos', 'Junior')

console.log(pessoa);
console.log(pessoa2);

