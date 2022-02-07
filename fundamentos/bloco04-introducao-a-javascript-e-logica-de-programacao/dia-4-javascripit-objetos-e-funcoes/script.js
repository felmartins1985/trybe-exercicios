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

