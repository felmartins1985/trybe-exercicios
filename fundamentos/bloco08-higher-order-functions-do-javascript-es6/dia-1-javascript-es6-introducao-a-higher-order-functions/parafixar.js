const wakeUp = () => "Acordando!";

const breakfast = () => "Bora tomar café";

const sleep = () => "Partiu dormir";

const doingThings = (param) => {
  const phrase = param(); //tenho que dizer que é uma função
  console.log(phrase);
}

doingThings(wakeUp);