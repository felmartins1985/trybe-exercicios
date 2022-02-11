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
        if(day===24 || day===31){
            dayItem.className="day holiday";
            day.innerHTML=day;
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
//exercicio 2
function createHolidayButton(buttonName){
    let buttonContainer=document.querySelector(".buttons-container");
    let newButton=document.createElement("button");
    newButton.innerHTML=buttonName;
    newButton.id="btn-holiday";
    buttonContainer.appendChild(newButton);
}
createHolidayButton("Feriados");
// exercicio 3
function displayHolidays(){
    let getHolidayButton=document.querySelector("#btn-holiday");
    let getHolidays=document.querySelectorAll(".holiday");
    let backGroundColor='rgb(238,238,238)';
    let setNewColor="white";
    getHolidayButton.addEventListener("click",function(){
        for(let index=0;index<getHolidays.length;index+=1){
            if(getHolidays[index].style.backGroundColor===setNewColor){           
                getHolidays[index].style.backGroundColor=backGroundColor;
            } else{
                getHolidays[index].style.backGroundColor=setNewColor;
            }
        }
    })
}
displayHolidays();