//Construtor
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// p1 = (ENDERECOMEMORIA) -> 'valor'
// p1.ENDERECOMEMORIA = {nome: 'Outra coisa'} Entender como funciona a alteração no valor dentro de um objeto
//As alterações podem ser feita no valor, mas não podemos mudar o endereço na memoria utilizando a variavel "const".

const p1 = new Pessoa('Luciano', 'Machado');
p1.nome = 'Outra coisa'
const p2 = new Pessoa('Maria', 'Aparecida');

console.log(p1);
console.log(p2);

