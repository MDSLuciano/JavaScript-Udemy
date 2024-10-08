class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault() //Desativa o formulario ser enviado de começo, assim podemos fazer as devidas verificações
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if(camposValidos && senhasValidas){
            alert('Formulário enviado')
            this.formulario.submit()
        }
    }

    senhasSaoValidas(){
        let valid = true
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value){
            valid = false
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.')
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.')
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }

        return valid
    }



    camposSaoValidos(){
        let valid = true //Começa com true e depois de fazer o tratamento pode retornar outra coisa
        
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }
        
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText //Isso vai retornar o elemento irmão anterior, para assim pegar o nome do campo
            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`)
                valid = false
            }

            //Método específico para o CPF para validar o mesmo
            if(campo.classList.contains('cpf')){  
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')){  
                if(!this.validaUsuario(campo)) valid = false
            }
            
        }

        return valid
    }

    validaUsuario(campo){
        const usuario = campo.value
        let valid = true
        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres')
            valid = false
        }
        //Condição que o usuário poderá conter apenas letras e/ou numeros
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números')
            valid = false
        }

        return valid
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido')
            return false
        }
        return true
    }



    criaErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
// Isso irá criar uma div depois do elemento, com o argumento "afterend",
// e o segundo elemento adicionando a div.
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()

