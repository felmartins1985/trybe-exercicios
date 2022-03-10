const employeeGenerator = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  return { nome, email: `${email}@trybe.com`};
};
console.log(employeeGenerator('felipe', 36));

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), //employeeGenerator()
    id2: callback('Luiza Drumond'),//employeeGenerator()
    id3: callback('Carla Paiva'), //employeeGenerator()
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));

const checkNumbers = (number1, number2) => {
  if (number1 === number2) {
    return "Parabéns!"
  } else {
    return "Erroooou!";
  }
}

const loteryResult = (number1, callback) => {
  const number2 = Math.floor((Math.random() * 5) + 1);
  return callback(number1, number2);//callback=checkNumbers(number1, number2);
}
console.log(loteryResult(2, checkNumbers));
// 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, callback) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = callback(rightAnswers[index], studentAnswers[index]);
    //compareAnswers((rightAnswers[index], studentAnswers[index]))
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// for (let index = 0; index < rightAnswers.length; index += 1) {
//   const actionReturn = callback(rightAnswers[index], studentAnswers[index]);
//   contador += actionReturn;
// }