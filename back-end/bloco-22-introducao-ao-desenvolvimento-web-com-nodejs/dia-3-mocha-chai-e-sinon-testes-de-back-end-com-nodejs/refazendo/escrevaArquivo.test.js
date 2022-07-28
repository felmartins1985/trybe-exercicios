const fs= require('fs');
const { expect } = require('chai');
const escrevaArquivo = require('./escrevaArquivo');
const sinon = require('sinon');

describe('Escreve Arquivo',()=>{
  before(()=>{
    sinon.stub(fs, 'writeFileSync');
  })
  after(()=>{
    fs.writeFileSync.restore();
  })
  it('Deve retornar uma string',()=>{
    const arquivo=escrevaArquivo('teste.txt','teste');
    expect(arquivo).to.be.a('string');
  });
  it('Deve retornar "ok"',()=>{
    const arquivo=escrevaArquivo('teste.txt','teste');
    expect(arquivo).to.be.equals('ok');
  })
})