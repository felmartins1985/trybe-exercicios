const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const addNewKey= (obj,key,value)=>{
//   obj[key]=value;
// }
// addNewKey(lesson2, 'turno', 'noite');
// console.log(lesson2);

// const listKeys= (obj)=> Object.keys(obj);
// console.log(listKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.
// const sizeObject= (obj)=> Object.values(obj).length;
// console.log(sizeObject(lesson1));

// Crie uma função para listar os valores de um objeto.Essa função deve receber um objeto como parâmetro.
// const listValue = (obj) => Object.values(obj);
// console.log(listValue(lesson3));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  //  console.log(array);traz as lessons em formato de array
  for (index in array) {
    //    console.log(array[index]);//traz as lessons uma embaixo da outra, sem ser em array
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));
// const keyValue= (obj, number) => Object.values(obj)[number];
// // console.log(keyValue(lesson1,2));
// Crie uma função que verifique se o par(chave / valor) existe na função.Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.Exemplo:

// const verifyPair = (obj, key, value) => {
//   const keyValue = Object.entries(obj);
//   let existe ='';
//   for (let index in keyValue) {
//     if (keyValue[index][0] === key && keyValue[index][1] === value) {
//       existe = true;
//     } else{
//       existe = false;
//     }
//   }
//   return existe;
// }
// console.log(verifyPair(lesson3, 'turno', 'noite'));

