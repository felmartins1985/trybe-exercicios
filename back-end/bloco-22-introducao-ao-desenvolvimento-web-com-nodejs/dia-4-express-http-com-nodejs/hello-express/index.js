const express = require('express');

const app = express(); // 1 Criar uma nova aplicação Express;

app.get('/hello', handleHelloWorldRequest); // 2 Dizer ao Express que,
// quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;
// ou
// app.get('/hello',(_req,res)=>{
//  res.send('Hello World!');
//})
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3 Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001

function handleHelloWorldRequest(_req, res) {
  // res.status(200).send('Hello World!');
  res.status(200).send('Olá mundo!');
// 4 Ao tratar uma requisição com método GET(//2) no caminho /hello, 
//enviar o status HTTP 200 que significa OK e a mensagem 'Hello World!'.
}
// Para que as modificações no seu código reflitam na API em execução, é preciso parar
// e reiniciar a aplicação, executando novamente o node index.js.
// npm i nodemon -D
// "dev": "nodemon index.js"
// npm run dev
