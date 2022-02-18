function lidarEnvio(event) {
    event.preventDefault();
    const validacao = invalidacaoDoInput();
    if (validacao=== false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }

function liberarEnvio(){
    let botaoSubmt=document.querySelector('#enviar');
    let divulgar=document.querySelector('#divulgacao');
    console.log(divulgar);
    botaoSubmt.disabled=!divulgar.checked;
}

window.onload=function(){
    const submitBotao = document.querySelector('#enviar');
    submitBotao.addEventListener('click', lidarEnvio);
    let divulgar=document.querySelector('#divulgacao');
    divulgar.addEventListener('change', liberarEnvio);
}



function invalidacaoDoInput() {
    const email = document.querySelector('#email-interessado').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#nome-interessado').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#motivo-ganhar').value.length;
    const invalidReason = reason > 500;
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
}

