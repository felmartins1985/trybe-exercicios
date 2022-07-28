const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', path: './imc.js' },
  { name: 'Calcular velocidade média', path: './velocidade.js' },
  { name: 'Jogo de adivinhação', path: './sorteio.js' },
];

const escolhendoScript = () => {
  console.log('Scripts: ');
  const SCRIPTS_NAME = scripts.map(({ name }, index) => console.log(`${index + 1}. - ${name}`));
  console.log('------------------------------------------');
  const SCRIPT = readline.questionInt('Qual script deseja executar (Digite o número)?');

  return scripts[SCRIPT - 1]; // retorna o array de scripts na posicao passada pelo usuario
};

const executeFunction = () => {
  const scriptParaExecutar = escolhendoScript();
  console.log(scriptParaExecutar);
  if (!scriptParaExecutar) {
    return console.log('Número inválido. Saindo');
  }
  console.log('');
  console.log(`Bem vindo ao Script: ${scriptParaExecutar.name}`);
  console.log('------------------------------------------');
  require(scriptParaExecutar.path);
}

executeFunction();