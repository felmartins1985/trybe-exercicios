
const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const escreverArquivo = require('./escreverArquivo');

describe('Executa a funcao escreverArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  after(() => { // preciso do after para que o arquivo.txt nao seja criado
    fs.writeFileSync.restore();
  });
  describe('a resposta', () => {

      it('é uma string', () => {
        const resposta = escreverArquivo('arquivo.txt', 'VQV com TDD');

        expect(resposta).to.be.a('string');
      });

      it('é igual a ok', () => {
        const resposta = escreverArquivo('arquivo.txt', 'VQV com TDD');

        expect(resposta).to.be.equals('ok');
      });
  })});
