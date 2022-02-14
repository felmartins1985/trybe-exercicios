// //exercicio 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente 
// um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

// function (nomeDoBotao){
//     let botao=document.createElement("button");
//     botao.className="btn-holiday";
//     botao.innerHTML=nomeDoBotao;
//     classedobutton-CredentialsContainer.appendChild(botao);
// }

// Implemente uma função que adicione ao botão "Feriados" um evento de "click"
// que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. 
// Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

// function (){
//     let botao=document.querySelector("#btn-holiday");
//     let feriados=document.getElementsByClassName(holiday);
//     let fundoNovo="red";
//     let fundoAntigo="white";
//     botao.addEventListener("click",function){
//     }
// }

// //exercicio 4
// Implemente uma função que receba como parâmetro a string "Sexta-feira"
// e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

// crio uma função para receber o parametro- function (string)
// crio um botao createElement("button")
// botaocriado.id=btn-holiday
// buttons-CredentialsContainer.appendChild(botao criado)
// tenho que ver se o button-container ja foi nomeado
// tenho que lembrar de colocar o nome que vai vir escrito no botao
// pq ate agora só coloquei a classe e o criei 

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica
// o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente 
// ele retorna à configuração inicial exibindo os dias.

// crio uma função
// crio uma variavel para receber o botao sexta-feira
// crio uma variavel que ira receber as datas que estao na sexta-feira
// crio uma variavel com o texto q eu quero q apareça
// crio addEventListener com o evento click e uma função anonima
// faço um loop para percorrer as datas que estao na variavel que recebeu as sexta-feiras
// dentro da função anomima se caso o texto que esta dentro da variavel seja diferente do texto criado,
// vai aparecer o novo texto
// caso contrario, vai voltar ao texto antigo

exercicio 6
Implemente duas funções que criem um efeito de "zoom". 
Ao passar o ponteiro do mouse em um dia do mês no calendário, 
o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia,
o texto deve retornar ao tamanho original.

mouse over e mouseout
crio uma variavel que ira receber a classe days
crio uma função com mouseover e função anonima com event 
escrevo event.target e o estilo que desejo qnd passar o mouse em cima do dia
posso aumentar tanto a letra quanto o formato

depois crio uma função mouseout com função anonima com paramentro event
escrevo event.target para quando tirar o mouse de cima, retorne ao padrao anterior  

exercicio 7
Implemente uma função que adiciona uma tarefa personalizada ao calendário.
A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar")
e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a 
classe "my-tasks" .

crio uma função para adicionar uma tarefa
crio uma variavel recebendo a classe my-tasks 
crio uma variavel que ira criar a tag span
depois pego essa variavel e faço innerHTML para adicionar qual vai ser a tarefa
depois pego a variavel da classe my tasks e faço um appendchild

exercicio 8

Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento 
de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> 
que possui a classe "my-tasks" .

crio uma função com parametro para colocar a cor
crio uma variavel que ira receber a classe my tasks
crio uma variavel que ira criar a tag div
depois essa mesma tag vai ter uma adição da classe task
depois pego a variavel que pegou a div e escrevo Stylebackgroundcolor que vai ter a cor igual
ao parametro estabelecido
e adiciono na variavel my tasks a div criada

exercicio 9
Implemente uma função que adiciona um evento que ao clicar no elemento 
com a tag <div> referente a cor da sua tarefa, atribua a este elemento 
a classe task selected , ou seja, quando sua tarefa possuir a classe task 
selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task
, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

crio uma função sem parametro
crio uma variavel que ira receber a tag div que tem a cor da tarefa
crio um addEventListener com o evento click e uma função anonima com event
dentro da função anonima, sem fechar o ultimo parenteses
crio umo condicional dizendo que se a variavel em questao tiver a classe task
mudara para task selected
depois faço um else para que ela volte a task

exercicio 10
Implemente uma função que adiciona um evento que ao clicar em
um dia do mês no calendário, atribua a este dia a cor da legenda
da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda,
a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

crio uma funcao sem parametro
crio uma variavel que ira receber a task selected
eu crio uma variavel que ira receber a id days
eu crio uma variavel que ira receber task
crio uma variavel que ira receber o backgroundcolor da variavel criada para o task

crio um addEventListener na variavel criada acima que tenha o evento click
e uma função anonima que tenha event dentro
faço uma condicional perguntando se a cor da variavel day é diferente da cor da tarefa
se for, a cor da variavel day vai ser igual a da tarefa
se nao, volta ao normal;




