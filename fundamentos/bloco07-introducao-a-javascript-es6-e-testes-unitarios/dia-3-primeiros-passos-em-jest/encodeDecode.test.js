//quando desejo importr mais de uma função
const { encode, decode } = require('./encodeDecode.js');
describe('testa a função encode e decode', () => {
  it('teste se encode e decode sao funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  })
  it('testa se as vogais sao convertidas adequadamente', () => {
    // expect(encode('a')).toEqual(1);
    // expect(encode('e')).toEqual(2);
    // expect(encode('i')).toEqual(3);
    // expect(encode('o')).toEqual(4);
    // expect(encode('u')).toEqual(5);
    expect(encode('ana')).toEqual('1n1');
    expect(encode('ele')).toEqual('2l2');
    expect(encode('xixi')).toEqual('x3x3');
    expect(encode('ovo')).toEqual('4v4');
    expect(encode('nu')).toEqual('n5');
  })
  it('testa se os numeros sao convertidos adequadamente', () => {
    // expect(decode(1)).toEqual('a');
    // expect(decode(2)).toEqual('e');
    // expect(decode(3)).toEqual('i');
    // expect(decode(4)).toEqual('o');
    // expect(decode(5)).toEqual('u');
    expect(decode('n5')).toEqual('nu');
    expect(decode('4v4')).toEqual('ovo');
    expect(decode('x3x3')).toEqual('xixi');
    expect(decode('2l2')).toEqual('ele');
    expect(decode('1n1')).toEqual('ana');
  })
  it('testa se o numero de caracteres retornados é o mesmo do parametro', () => {
    expect(encode('trybe').length).toEqual(5);
    expect(decode('trybe').length).toEqual(5);
  })
})