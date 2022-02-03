let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index=0; index<numbers.length;index=index+1){
    console.log(numbers[index])
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado=0;
for (let index=0; index<numbers.length;index+=1){
    resultado= resultado + numbers[index];
}
console.log(resultado);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado=0;
for (let index=0; index<numbers.length;index+=1){
    resultado= resultado + numbers[index];
}
let media= resultado/10;
console.log(media);

if (media>20){
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior= 1;
for (let index=0;index<numbers.length;index+=1){
    if(numbers[index]>maior){
        maior=numbers[index];
    }
}console.log(maior);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar=0;
for (let index=0; index<numbers.length; index+=1){
    if (numbers[index]%2 !==0){
        impar+=1;
    }
} 
if (impar===0){
    console.log("nenhum valor encontrado");
} else{
    console.log(impar);
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor=numbers[0];
for (let index=0; index<numbers.length; index+=1){
    if (numbers[index]<menor){
        menor= numbers[index];
    }
}
console.log(menor);

let numbers=[]
for (let index=0; index<26; index+=1){
    numbers.push(index);
}
console.log(numbers);

for (let div=0; div<numbers.length;div+=1){
    console.log(numbers[div]/2);
}
