
const fs = require('fs');
const { expect } = require('chai');

const numNatural = require('./numeraisNaturais');

describe('Executa a funcao numNatural', () => {
  describe('Quando o numero for maior zero', () => {
     describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = numNatural(10);

        expect(resposta).to.be.a('string');
      });

      it('é positivo', () => {
        const resposta = numNatural(10);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('Quando o numero e negativo', () => {
    describe('a resposta', () => {
      it('é igual uma string', () => {
        const resposta = numNatural(-10);

        expect(resposta).to.be.a('string');
      });
      it('é negativo', () => {
        const resposta = numNatural(-10);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });
  describe('Quando o numero e neutro', () => {
    describe('a resposta', () => {
      it('é igual uma string', () => {
        const resposta = numNatural(0);

        expect(resposta).to.be.a('string');
      });
      it('é neutro', () => {
        const resposta = numNatural(0);

        expect(resposta).to.be.equals('neutro');
      });
    });
  });
  describe('Quando nao e numero', () => {
    describe('a resposta', () => {
      it('é igual uma string', () => {
        const resposta = numNatural('AAA');

        expect(resposta).to.be.a('string');
      });
      it('retornando o valor deve ser um numero', () => {
        const resposta = numNatural('AAA');

        expect(resposta).to.be.equals('o valor deve ser um numero');
      });
    });
  });
});