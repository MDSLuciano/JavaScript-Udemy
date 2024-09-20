/*
Object.value // retorna so o valor do objeto
Object.entries // transforma o objeto em um array, cada propriedade e valor vira um array
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)
// Ja vimos
Object.keys (retorna as chaves como um array)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Caneca', preco : 1.8} //Isso pode ter uma alteração
const outraCoisa = {...produto} // copia

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5

console.log(produto);
console.log(outraCoisa);

