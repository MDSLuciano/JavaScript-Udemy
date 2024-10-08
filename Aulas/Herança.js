// Produto 
// Camiseta = Cor, caneca = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
// Camiseta.prototype.constructor = Camiseta
Camiseta.prototype = Object.create(Produto.prototype)
// Aqui estamos setando o construtor da Camiseta, porque assim não fica dependente do construtor de Produto
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco (this.preco * (percentual / 100)))
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 25, 'Porcelana', 5)

caneca.estoque = '21'

console.log(produto);
console.log(camiseta);
console.log(caneca);


