// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
// // console.log("Bem vinda, "+ info.personagem);
// info["recorrente"]= "Sim";
// // // console.log(info);
// // for (let key in info){
// //     console.log(info[key]);
// // }
// let info2={
//     personagem: "e Tio Patinhas",
//     origem: "e Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: " e O último MacPatinhas",
//     recorrente: "Sim",
// }
// for (let properties in info) {
//     if (properties==="recorrente" && info.recorrente==="Sim" && info2.recorrente==="Sim"){
//         console.log("Ambos recorrentes");
//     } 
//     if (info[properties]!== info2[properties]){    
//         console.log(info[properties]+ " "+ info2[properties]);
//     }
// }
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
// console.log("O livro favorito de"+ leitor.nome+ " "+ leitor.sobrenome+" se chama '" + leitor.livrosFavoritos[0].titulo+"'.");
// leitor.livrosFavoritos.push({
    
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editor: 'Rocco',
//       }  
// )
// // console.log(leitor);
// console.log(leitor.nome+" tem "+ leitor.livrosFavoritos.length+ " livros favoritos");

// function verificar(nome) {
//     let reverse=''
//     for(let index=nome.length-1;index>=0;index-=1){
//         reverse= reverse + nome[index];
//     }
//     console.log(nome);
//     console.log(reverse);
//     if(nome===reverse){
//         return true;
//     } else{
//         return false;
//     }    
// }
// console.log(verificar("arara"));

// function verificar(string) {
//     let reverse=string.split('').reverse().join('');
//     if (reverse===string){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(verificar("arara"));

// function indiceMaior (numero) {
//     let maior=0;
//     for(let indice in numero){
//         if (numero[maior]<numero[indice]){
//             maior=indice;
//         }
//     }
//     return maior;
// }
// console.log(indiceMaior([2,3,6,7,10,1]))

// function indiceMenor (numero) {
//     let menor=0;
//     for(let indice in numero){
//         if (numero[menor]>numero[indice]){
//             menor=indice;
//         }
//     }
//     return menor;
// }
// console.log(indiceMenor([2,3,6,7,10,1]))

// function maiorNome (nome) {
//     let maior=nome[0];
//     for (let indice in nome){
//         if(maiorNome.length<nome[indice].length){
//             maiorNome=nome[indice];
//         }
//     }
//     return maiorNome;
// }
// console.log(maiorNome(["josé","lucas","nádia","fernanda","joana"]));

// function soma(numeros){
//     let soma=0;
//     for (let index=0; index<=numeros;index+=1){
//         soma+= index;
//     }
//     return soma;
// }
// // console.log(soma(5));
// function verificarFimPalavra(nome1, nome2){
// let palavra=nome1.split('').reverse().join('');
// let fimPalavra=nome2.split('').reverse().join("");
// let resultado;
// for (let index=0;index<fimPalavra.length;index+=1){
//     if(palavra[index]!==fimPalavra[index]){
//         resultado= false;
//         break;
//     } else{
//         resultado= true;
//     }
// }
//     return resultado
// }

// console.log(verificarFimPalavra("trybe","be"));

let nome="felipe"
console.log(nome.join(''));
