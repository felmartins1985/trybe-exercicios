const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  const checkMarsTemperature = getMarsTemperature();
  setTimeout(() => {console.log(`Mars temperature is: ${checkMarsTemperature} degree Celsius`)},messageDelay() )
} //se checkMarsTemperature ja é uma função, porque tenho que colocar como arrow function?
sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo