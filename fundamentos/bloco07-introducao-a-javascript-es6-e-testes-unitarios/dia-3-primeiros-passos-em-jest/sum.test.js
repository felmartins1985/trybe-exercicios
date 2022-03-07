const sum = require('./sum.js');
describe('testa a função sum', () => {
  const { describe } = require('yargs');
  const sum = require('./sum')
  it('o retorno da soma dever ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it('o retorno da soma deve ser zero', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it('a função deve retornar um erro', () => {
    expect(() => sum(4, "5")).toThrow();
  })
  it('a função deve retornar um erro parameters must be numbers', () => {
    expect(() => sum(4, "5")).toThrowError(new Error(('parameters must be numbers')));
  })
})
