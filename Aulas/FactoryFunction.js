// Factory functions / Constructor functions / Classes

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa('Luciano','Machado');
console.log(p1.nomeCompleto());
