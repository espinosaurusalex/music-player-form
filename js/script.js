const formulario = document.querySelector('#form-login');
const inputNome = document.querySelector('#nome');
const inputSenha = document.querySelector('#senha');
const mensagemErro = document.querySelector('#mensagem-erro')

const musica = document.querySelector('#musica');



formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const nomeDigitado = inputNome.value.trim().toLowerCase();
    const senhaDigitada = inputSenha.value.trim().toLowerCase();

    if (nomeDigitado !== 'reze'){
        mensagemErro.textContent = 'você não é o Denjinho';
        musica.pause();
        musica.currentTime = 0;
        return;

    }

    if(senhaDigitada !== 'denji'){
        mensagemErro.textContent = "senha incorreta, a senha é o motoserra";
        musica.pause();
        musica.currentTime = 0;
        return;
    }



    

    musica.play().catch(error => {
        console.log("Erro ao reproduzir o áudio:", error);
    });
});