const a=10;
const b=2;
console.log("Soma " + (a+b));
console.log("Subtração "+ (a-b));
console.log("Multiplicação "+ (a*b));
console.log("Divisão "+ (a/b));
console.log("Módulo " + (a%b));

const c=5;
const d=7;
if (c>d){
    console.log("O número " +c+ " é o maior");
} else if (d>c) {
    console.log ("O número "+ d+" é o maior")
}
const e=7;
const f=8;
const g=9;
if (e>f && e>g){
    console.log("O número "+ e+" é o maior dos 3" );
} else if (f>e && f>g) {
    console.log ("O número "+f+ "é o maior dos 3");
} else {
    console.log ("O número "+ g+" é o maior dos 3")
}
const h=4;
    if (h>0){
        console.log ("positive");
    } else if (h<0){
        console.log("negative");
    } else{
        console.log("zero");
    }
let angulaA=50;
let angulaB=60;
let angulaC=70;
let somaDosAngulas= angulaA+angulaB+angulaC;
let todosOsAngulasSaoPositivos= angulaA>0 && angulaB>0 && angulaC>0;
if(todosOsAngulasSaoPositivos>0){
    if(somaDosAngulas=180){
        console.log(true);
    } else {
        console.log(false)
    }
} else {
    console.log("Erro");
}

let peca= "rainha";
switch (peca){
    case "bispo":
        console.log("Bispo-> Diagonal");
        break;
    case "rei":
        console.log("Rei-> uma casa para qualquer direção");
        break;
    case"rainha":
        console.log("Rainha-> diagonal, horizontal e vertical")
        break;
}


  

