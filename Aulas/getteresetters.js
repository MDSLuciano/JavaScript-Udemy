// Getter e setter
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque

    //Você consegue colocar como a Propriedade do Objeto vai funcionar
    Object.defineProperty(this, 'estoque', {
        enumerable: true,    //Serve para exibir a propriedade do objeto
        // value: estoque,   // Não iremos precisar dessa linha por causa do modo getter e setter
        // writable: true,      
        configurable: false,  //configuravel, você redefinir as propriedades depois.
        get: function () {
            return estoque
        },
        set: function (valor) {
            if(typeof valor !== 'number'){
                console.log('Bad Value');
                return
            }
            estoquePrivado = valor
        }
    })
}

    //Você consegue colocar definir varias propriedade passando um objeto dentro do metodo

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500
console.log(p1.estoque)