//Array Destructuring
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada', "Mexico"];
const [firstCountry, secondCountry, thirdCountry, fourthCountry, fifthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
console.log(fifthCountry);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// const correctNames=[comida,animal,bebida]
// console.log(correctNames);
// const [animal1, bebida1, comida1]=correctNames
// console.log(comida1, animal1, bebida1); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,,...numerosPares] = numerosPares;//as virgulas retiram os 3 primeiros elementos e só pode ser usado antes 
//e nao depois

console.log(numerosPares); // [6, 8, 10, 12];