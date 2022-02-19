/* dentro da função de lidar com o envio 
eu colocao a função invalidação do input
e faço uma condicional que perguntara se a validação é falsa
caso seja, emitira um alerta dizendo dados invalidos
caso nao seja, emitira um alerta dizendo que foram enviados com sucesso
 */
function lidarEnvio(event) {
    event.preventDefault();
    const validacao = invalidacaoDoInput();
    if (validacao=== false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }

/* eu crio a função para liberar o envio somente se o usuario concordar em divulgar as fotos
entao crio uma variavel para receber o botao Enviar
e crio uma variavel para receber o input que faz concordar com a divulgacao
ao final, eu peço para que a variavel criada para o botao inverta seu atributo
qual seja, o disabled, caso o usuario tenha concordado com a divulgacao
para isso ocorrer, eu utilizo o operador chamado "bang" 
e ele representa uma negação, ou seja, o contrário do retorno de alguma coisa. 
Se algo for verdadeiro ele retornará falso e vice-versa.
Sendo assim, se a checkbox estiver "checkada" nosso botão não estará 
desabilitado (estará habilitado). Ou seja, ela transforma o disabled que era verdadeiro em falso
sendo possivel entao, enviar o formulario.

 */
function liberarEnvio(){
    let botaoSubmt=document.querySelector('#enviar');
    let divulgar=document.querySelector('#divulgacao');
    botaoSubmt.disabled=!divulgar.checked;
}

window.onload=function(){
    const submitBotao = document.querySelector('#enviar');
    submitBotao.addEventListener('click', lidarEnvio);
    let divulgar=document.querySelector('#divulgacao');
    divulgar.addEventListener('change', liberarEnvio);
}


/* essa função é para invalir o input dos limites de caracteres
eu crio 3 variaveis para receber a ids que tem limite de caracteres
depois eu crio outras 3 variaves com o que vem fora do limite de caracteres
apos isso, faço uma condicional dizendo se caso uma das variaveis esteja fora 
do limite de caracteres será retornado false 
caso contrario, sera retornado verdadeiro
 */
function invalidacaoDoInput() {
    const email = document.querySelector('#email-interessado').value.length;//so pega o tamanho
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#nome-interessado').value.length;//so pega o tamanho
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#motivo-ganhar').value.length;//so pega o tamanho
    const invalidReason = reason > 500;
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
}

