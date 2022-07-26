const fs=require('fs');
const escreverArquivo= (nomeArquivo, conteudo) => {
  fs.writeFileSync(nomeArquivo, conteudo);
  return 'ok';

}
module.exports=escreverArquivo;
