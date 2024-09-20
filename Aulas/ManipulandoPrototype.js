// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // ___proto___: Object.prototype
};

const objB = {
    chaveB: 'B'
    // ___proto___: objA
}

const objC = new Object()
objC.chaveC = 'C'

//Definino que eu posso acessar o valor de objA no objB
Object.setPrototypeOf(objB, objA) 
Object.setPrototypeOf(objC, objA) 
console.log(objB.chaveA);

//Exemplo
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco *(percentual / 100))
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco *(percentual / 100))
}

const p1 = new Produto('Camiseta', 50)
p1.aumento(100)
console.log(p1);

// Literal
const p2 ={
    nome: 'Caneca',
    preco: 15
}
//Adicionando o prototype a um objeto literal
Object.setPrototypeOf(p2, Produto.prototype)
//Com isso o nosso literal acabou se tornando parte do nosso construtor Produto.

p2.aumento(10)
console.log(p1);
console.log(p2);
//Esse aqui estamos setando as configurações do objeto e também o seu prototype.
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable:true,
        enumerable:true,
        value: 99
    },
    tamanho2: {
        writable: true,
        configurable:true,
        enumerable:true,
        value: 43
    }
})