const myFizzBuzz = require('./myfizzbuzz.js');
describe('testa a função myFizzBuzz',() => {
  it('analisa se o numero é divisivel por 3 e 5',() => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('analisa se o numero é divisivel por 3',() => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  it('analisa se o numero é divisivel por 5',() => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })
  it('analisa se o numero não é divisivel por 3 ou 5',() => {
    expect(myFizzBuzz(16)).toBe(16);
  })
  it('analisa se nao é um numero',() => {
    expect(myFizzBuzz('1')).toBe(false);
  })
})