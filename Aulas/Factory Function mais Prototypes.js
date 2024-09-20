//Composição você retira o prototype e adiciona ele depois, assim você
//consegue utilizar as funções a qualquer momento


const falar = {
    falar(){
        console.log(`${this.nome} está falando.`);
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    }
}

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
}

const pessoaPrototype = Object.assign({}, falar, comer, beber)
function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = new criaPessoa('Luciano', 'Machado')
console.log(p1);
