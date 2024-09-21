class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já esta ligado');
            return
        }

        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return
        }

        this.ligado = false
    }

}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome) //Esse super pega o valor do construtor Pai, e dentro passamos o parametro que queremos

        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome)
        this.temWifi = temWifi
    }
    //Também podemos sobrescrever o método passando ele com o mesmo nome.
    ligar(){
        console.log('Olha, você alterou o método ligar');
        
    }



}


const s1 = new Smartphone('iPhone', 'Preto', '13 Pro Max')
console.log(s1);
