//Default Parameters
const greeting = (user = 'jovem') => console.log(`Welcome ${user}!`);

greeting();

const multiply = (number, value=0) => {
  return number * value
};

console.log(multiply(8));