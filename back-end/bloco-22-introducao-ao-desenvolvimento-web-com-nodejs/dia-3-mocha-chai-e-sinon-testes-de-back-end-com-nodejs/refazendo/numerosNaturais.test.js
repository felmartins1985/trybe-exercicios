const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const numerosNaturais = require('./numerosNaturais');

describe('Números Naturais', () => {
  describe('Quando o numero for positivo', () => {
    it('Deve retornar uma string',()=>{
      const numero=numerosNaturais(1);
      expect(numero).to.be.a('string');
    });
    it('Deve retornar "positivo"',()=>{
      const numero=numerosNaturais(1);
      expect(numero).to.be.equals('positivo');
    })
  });
  describe('Quando o numero for negativo`',()=>{
    it('Deve retornar uma string',()=>{
      const numero=numerosNaturais(-2);
      expect(numero).to.be.a('string');
    });
    it('Deve retornar "negativo"',()=>{
      const numero=numerosNaturais(-1);
      expect(numero).to.be.equals('negativo');
    })
  });
  describe('Quando o numero for neutro',()=>{
    it('Deve retornar uma string',()=>{
      const numero=numerosNaturais(0);
      expect(numero).to.be.a('string');
    });
    it('Deve retornar "neutro"',()=>{
      const numero=numerosNaturais(0);
      expect(numero).to.be.equals('neutro');
    });
  })
  describe('Quando nao for passado um numero',()=>{
    it('Deve retornar uma string',()=>{
      const numero=numerosNaturais('a');
      expect(numero).to.be.a('string');
    });
    it('Deve retornar "o valor deve ser um numero"',()=>{
      const numero=numerosNaturais('a');
      expect(numero).to.be.equals('o valor deve ser um numero');
    })
  })
})