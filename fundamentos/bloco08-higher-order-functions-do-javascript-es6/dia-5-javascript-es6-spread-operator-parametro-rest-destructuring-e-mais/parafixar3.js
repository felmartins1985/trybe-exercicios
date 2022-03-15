// //Object Destructuring
// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };
// // const { name, seller } = product;
// // console.log(name); // Smart TV Crystal UHD
// // console.log(seller); // Casas de Minas

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// // // definindo o objeto
// // const character = {
// //   name: 'Luke SkyWalker',
// //   age: '53',
// //   description: {
// //     specieName: 'Human',
// //     jedi: true,
// //   },
// //   homeWorld: {
// //     name: 'Tatooine',
// //     population: '200000',
// //   },
// // };

// // // desestruturando o objeto:
// // const { name, age, homeWorld: { name: planetName }, description: { specieName: be } } = character;

// // // imprimindo os valores:
// // console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele é ${be}.`);


// // const daysOfWeek = {
// //   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
// //   weekend: ['Saturday', 'Sunday'],
// // };

// // const { workDays, weekend } = daysOfWeek;
// // console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// // console.log(weekend); // ['Saturday', 'Sunday']

// // const weekdays = [...workDays, ...weekend];
// // console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userAndJob={
  ...user,
  ...jobInfos,
}
console.log(userAndJob);
const {name, age, nationality, profession, squad, squadInitials}= userAndJob;
console.log(`Hy, my name is ${name}, I'm ${age} years old and i'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

