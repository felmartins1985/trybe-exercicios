function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//crio um array todos os dias que desejo
function createDaysOfMonth(){
    let getDayList=document.querySelector("#days");
//crio uma variavel que ira pegar o id "days"
    for (let index=0;index<dezDaysList.length;index+=1){
        let day=dezDaysList[index];
        let dayItem=document.createElement("li");
//crio uma variavel que ira receber todos os dias do array
//crio uma variavel que ira criar o "li"
        if(day===24 | day===31){
            dayItem.className="day holiday";
            dayItem.innerHTML=day;
            getDayList.appendChild(dayItem);
//se a variavel "day" for dia 24 ou 31, ela tera duas classes e a variavel day
// mostrara os dias
        } else if(day===4 || day===11 || day===18){
            dayItem.className="day friday";
            dayItem.innerHTML= day;
            getDayList.appendChild(dayItem);
// se a variavel "day" for dia 4,11 ou 18, ela receberá 2 classes
// e mostrará os dias em questao
        } else if(day===25){
            dayItem.className="day holiday friday";
            dayItem.innerHTML= day;
            getDayList.appendChild(dayItem);
// se a variavel "day" for dia 25, ela retoranará
// 3 classes e mostrará o dia em questao
        } else {
            dayItem.innerHTML=day;
            dayItem.className="day";
            getDayList.appendChild(dayItem);
//caso contrario, se nao for nenhuma das condiçoes acima, "day" terá 
//apenas uma classe.
        }
    }
}
createDaysOfMonth();

// //exercicio 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente 
// um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createHolidayButton(buttonName){
    let buttonContainer=document.querySelector(".buttons-container");
    let newButton=document.createElement("button");
    newButton.innerHTML=buttonName;
    newButton.id="btn-holiday";
    buttonContainer.appendChild(newButton);
}
createHolidayButton("Feriados");
//eu crio uma função com um parametro chamado buttonname
// depois, crio uma variavel que ira receber a classe button-buttonContainer
// adiante, crio uma variavel que ira receber a cricação do elemebto button
//apos criar as variaveis, eu adiciono a newbutton seu texto, quer será o parametro
//criado na função
//depois, na mesma newbutton eu adiciono o seu id e faço appendchild


// exercicio 3
// Implemente uma função que adicione ao botão "Feriados" um evento de "click"
// que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. 
//Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
function displayHolidays(){
    let getHolidayButton=document.querySelector("#btn-holiday");
    let getHolidays=document.querySelectorAll(".holiday");
    let backGroundColor='red';
    let setNewColor="white";
    
    //eu crio uma variavel que ira receber o id btn-holiday
//depois crio outra variavel que ira receber todas as classes que tenham holiday
//crio uma variavel que ira receber a cor que eu desejo no background
//e crio uma variavel com a cor atual   
    getHolidayButton.addEventListener("click",function(){

//crio um addeventlistener para o get holiday button com o click e com a função anonima
//lembro que nao fecho os parenteses apos o function
        for(let index=0;index<getHolidays.length;index+=1){
//crio um for que ira contar até o tamanho do getholidays
            if(getHolidays[index].style.backGroundColor===setNewColor){           
                getHolidays[index].style.backgroundColor=backGroundColor;
            // }
                // //abro uma condicional que ira analisar se os index do hetholidays sao brancos
// //se forem brancos, irá mudar para a cor desejada
            } else{
                getHolidays[index].style.backGroundColor=setNewColor;
            }
//para voltar a cor original, eu coloco o else, ja que todas vao estar vermelhas
//quando eu clicar a primeira vez;
        }
    })
}
displayHolidays();

// //exercicio 4
// Implemente uma função que receba como parâmetro a string "Sexta-feira"
// e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createFridayButton(buttonName){
    let buttonContainer=document.querySelector(".buttons-container");
    let newButton=document.createElement("button");
//eu crio uma função com um parametro dentro
//depois crio uma variavel para receber o .button-container
//depois crio uma variavel para criar o button
//o proprio elemento "button" cria o botao para poder ser clicado

newButton.id="btn-friday";
    newButton.innerHTML=buttonName;
    buttonContainer.appendChild(newButton);
}
//a tag criada parecer o botao vai ser escrito o nome do parametro/
//depois eu faço um appendchild para a variavel que ira receber o botao
createFridayButton("Sexta-feira");

//exercicio 5

//Implemente uma função que adicione ao botão "Sexta-feira" um evento 
//de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//É interessante que este botão possua também a lógica inversa. Ao ser 
//clicado novamente ele retorna à configuração inicial exibindo os dias.


function displayFriday(fridayArrays){
//crio uma função com parametro
    let getFridayButton=document.getElementById("btn-friday");
    let fridays=document.getElementsByClassName("friday");
    let newFridayText="Sextou o/";
//crio uma variavel para pegar o id btn-friday
//crio uma variavel para pegar a classe friday;
//crio uma variavel que terá uma string que ira aparecer quando eu clicar no botao sexta-feira
    getFridayButton.addEventListener("click",function(){
//crio no botao que recebeu o btn-friday um addeventlistener com uma função anonima sem evento
//nao posso esquecer de deixar o parenteses aberto
        for (let index=0; index< fridays.length;index+=1){
//crio um for que ira percorrer ate o tamanho da variavel que recebeu as sexta-feiras
            if(fridays[index].innerHTML!==newFridayText){
                fridays[index].innerHTML=newFridayText;
            } else{
                fridays[index].innerHTML=fridayArrays[index];
            }
        }
//crio uma condicional que, caso a posição da variavel que recebeu as sexta-feiras
// seja diferente do texto que eu criei na variavel para qnd clicar no botao
//o valor do texto será colocado no lugar do que está escrito na posição da variavel
// faço um else para quando clicar pela segunda vez, retornar ao que estava escrito antes
    })   
}

//crio um array com os dias que caem sexta-feira;
displayFriday([4,11,18,25]);

//exercicio 6
//Implemente duas funções que criem um efeito de "zoom". 
//Ao passar o ponteiro do mouse em um dia do mês no calendário, 
//o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia,
// o texto deve retornar ao tamanho original.

function dayMouseOver(){
    let days=document.querySelector("#days");
//crio uma função para receber o mouse por cima das datas sem parametro
//crio uma variavel que ira receber a id days
    days.addEventListener("mouseover",function(event){
        event.target.style.fontSize="30px";
        event.target.style.fontWeight="600"
    })
}
//a variavel que recebe a id days, eu faço um addeventlistener com mouse over e uma função anonima
//lembrar que nao posso fechar o ultimo parentes e que tenho um parametro nessa função
//depois, com o event.target eu escolho o tamanho da fonte e o seu peso
function dayMouseOut(){
    let days=document.querySelector("#days");
//crio uma funçao para receber o mouse ao deixar de passar por cima da data sem parametro
//crio uma variavel que ira receber o id days
    days.addEventListener("mouseout", function(event){
        event.target.style.fontWeight="200";
        event.target.style.fontSize="20px";
    })
}
// a variavel que recebe a id days, faço um addeventlistener com mouse out e função anonima com parametro
//depois, com o paramentro.target eu escolho a fonte e o peso que irao retornar ao deixar de passar
//o mouse
dayMouseOver();
dayMouseOut();

//exercicio 7
//Implemente uma função que adiciona uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar")
// e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a 
//classe "my-tasks" .
function newTaskSpan(task){
//crio uma função com parametro;
    let taskContainer=document.querySelector(".my-tasks");
    let taskName=document.createElement("span");
//crio uma variavel para escolher a classe my-tasks
//crio uma variavel que ira criar o elemento span;
    taskName.innerHTML=task;
    taskContainer.appendChild(taskName);
// depois, digo que a variavel que criou o span ira receber o parametro da função
// e faço appendchild da variavel que criou a função para o my-tasks    
}
newTaskSpan("Projeto");

//exercicio 8

//Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
//Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento 
//de tag <div> com a classe task .
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> 
//que possui a classe "my-tasks" .

function newTaskDiv(color) {
//crio uma funçao com paramentro
    let tasksContainer = document.querySelector(".my-tasks");
    let newTask = document.createElement('div');
//crio uma varivel que ira receber a classe my-tasks
//crio uma variavel que ira criar div
    newTask.className = "task";
    newTask.style.backgroundColor = color;
//faço que a variavel que criou a div tenha uma classe chamada task
//faço que essa variavel da div tenho uma backgroundcolor igual ao parametro estabelecido
    tasksContainer.appendChild(newTask);
//adiciono a div a my-tasks;
};
  
newTaskDiv('green');

//exercicio 9
//Implemente uma função que adiciona um evento que ao clicar no elemento 
//com a tag <div> referente a cor da sua tarefa, atribua a este elemento 
//a classe task selected , ou seja, quando sua tarefa possuir a classe task 
//selected ela estará selecionada.
//Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task
// , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
//crio uma função sem parametros
//crio uma variavel que ira receber a classe task-selected a ser definida e recebe-la;
//crio uma variavel que   ira a class task a ser definida e recebe-la
    myTasks.addEventListener('click', function(event) {
//crio um addeventlistener com click e uma função anonima
        if (selectedTask.length === 0) {
        event.target.className = 'task selected';
//crio uma condicional para a select task definir a classe taske selected;
    } else {
        event.target.className = 'task';
      }
//crio um else para voltar a situaçao anterior antes do clique
    });
  };
  
  setTaskClass();

//exercicio 10
//Implemente uma função que adiciona um evento que ao clicar em
// um dia do mês no calendário, atribua a este dia a cor da legenda
// da sua tarefa selecionada.
//Ao clicar novamente no dia com a cor da legenda,
// a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
    
  });
  
};

setDayColor();