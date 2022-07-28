const fs= require('fs');
const escrevaArquivo = (nomeArquivo, conteudo) => {
  fs.writeFileSync(nomeArquivo, conteudo);
  return 'ok';
}

module.exports=escrevaArquivo;
