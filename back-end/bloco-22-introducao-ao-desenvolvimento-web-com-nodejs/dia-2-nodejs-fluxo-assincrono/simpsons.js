const fs = require('fs').promises;
fs.readFile('simpsons.json', 'utf8')
.then((data)=>{
  const simpsons = JSON.parse(data);
  const character= simpsons.map((simp)=>`${simp.id}-${simp.name}`);
  // console.log(`o conteudo esperado é: ${character}`);
  character.forEach((string) => console.log(string));
}

)
