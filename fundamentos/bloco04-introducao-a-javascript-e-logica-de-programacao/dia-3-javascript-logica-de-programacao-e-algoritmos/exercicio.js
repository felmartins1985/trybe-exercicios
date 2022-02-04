let fator=10;
for (let index=10;index>0;index-=1){
    fator*=index;
}
console.log(fator);

let word="tryber";
let invertido= word.split("").reverse().join("");
let invert="";
console.log(invertido);
for (index=word.length-1;index>=0;index-=1){
    invert=word[index];
    console.log(invert);
}

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorArray= array[0];
let menorArray= array[0];
for (let index=0; index<array.length; index+=1){
    if(array[index].length>maiorArray.length){
        maiorArray= array[index];
    }
}
console.log(maiorArray);

for (let index2=0; index2<array.length;index2+=1){
    if(array[index2].length<menorArray.length){
        menorArray=array[index2];
    }
}
console.log(menorArray);
