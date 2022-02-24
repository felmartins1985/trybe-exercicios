// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", function(event) {
    event.preventDefault();
});
INPUT_CHECKBOX.addEventListener('click', function(event){
    event.preventDefault();
})
INPUT_TEXT.addEventListener('keypress', function(event){
    let caracter=event.key;
//ao criar uma variavel para receber o event.key, eu atribuo a variavel 
//em questao a tecla pressionada no evento de origem

    if (caracter!=="a"){
        event.preventDefault();
    }
});
//se a variavel seja diferente de "a", eu peço para que a função nao funcione;
