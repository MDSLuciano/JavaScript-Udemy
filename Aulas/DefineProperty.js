// defineProperty - defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    //Você consegue colocar como a Propriedade do Objeto vai funcionar
    Object.defineProperty(this, 'estoque', {
        enumerable: true,    //Serve para exibir a propriedade do objeto
        value: estoque,      //Está colocando o valor na propriedade
        writable: true,      //Se isso for falso, não ira permitir alteração no valor na propriedade.
        configurable: false  //configuravel, você redefinir as propriedades depois.
    })

    //Você consegue colocar definir varias propriedade passando um objeto dentro do metodo
    Object.defineProperties(this, {
        nome: {
            enumerable: true,    
            value: nome,      
            writable: true,     
            configurable: false
        },
        preco: {
            enumerable: true,    
            value: preco,      
            writable: true,     
            configurable: false
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1);
