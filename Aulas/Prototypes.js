// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// instância
const pessoa1 = new Pessoa('Luciano', 'M.') // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.') // <- Pessoa = Função construtora

console.dir(pessoa1)
console.dir(pessoa2)

/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype de função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada ate o topo (null) até encontrar (ou não) tal membro.
*/

function PessoaNew(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
//Isso faz referencia a Object.prototype, assim ele so cria uma instancia,
//no prototype assim economizando memoria do servido ja que faz referencia
//apenas uma vez.
PessoaNew.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}//Podemos ver ela funcionando no console do navegador para retornar o valor dessa função


// instância
const pessoa3 = new PessoaNew('Luciano', 'M.') // <- Pessoa = Função construtora
const pessoa4 = new PessoaNew('Maria', 'A.') // <- Pessoa = Função construtora

console.dir(pessoa3)
console.dir(pessoa4)

