const pessoa1 = new Object();
pessoa1.nome = 'Luciano';
pessoa1.sobrenome = 'Machado';
pessoa1.idade = 23;

// Posso criar uma função dentro de um objeto
pessoa1.falarNome = function(){
    return (`${this.nome} está falando seu nome`)
}// O this serve para fazer referencia no proprio objeto.

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();// cria a data
    return dataAtual.getFullYear() - this.idade;
}//Usando a função getFullYear para pegando o ano atual e subtrai sobre a idade do objeto

console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1){
    console.log(chave);
}
