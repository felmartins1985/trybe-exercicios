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
let nota=120;
if(nota<0 || nota>100){
    console.log("Erro");
} else if(nota>=90){
    console.log("A");
} else if(nota>=80){
    console.log("B");
} else if(nota>=70){
    console.log("C");
} else if (nota>=60){
    console.log("D");
} else if(nota>=50){
    console.log("E");
}
const x=1;
const y=2;
const z=3;
let temPar;
if ((x%2==0 || y%2==0 || z%2==0)){
    temPar= true;
} else {
    temPar=false;
}
console.log(temPar)
const m=4;
const n=6;
const o=8;
let temImpar;
if((m%2==0 || n%2==0 || o%2==0)){
    temImpar=false;
} else {
    temImpar=true;
}
console.log(temImpar);
const custo=10;
const valorDeVenda=20;
if (custo>=0 && valorDeVenda>0){
    const custoTotal= custo *1.2;
    const lucro= (valorDeVenda - custoTotal) *1000;
    console.log(lucro);
} else{
    console.log("Erro");
}
