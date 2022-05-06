const service = require('./Service');
test("testar a função retornaNumeroAleatorio", () => {
  service.retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
  // service.retornaNumeroAleatorio();
  expect(service.retornaNumeroAleatorio()).toBe(10); // isso é considerado uma chamada
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
});
test('mudar a implementação da função retornaNumeroAleatorio', () => {
  service.retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
  // service.retornaNumeroAleatorio.mockImplementation((a, b) => a/b);
  expect(service.retornaNumeroAleatorio(10, 2)).toBe(5);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(10, 2);
})
test('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros', () => {
  service.retornaNumeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);
  expect(service.retornaNumeroAleatorio(2, 2, 2)).toBe(8);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(2, 2, 2);
  service.retornaNumeroAleatorio.mockReset();
  service.retornaNumeroAleatorio = jest.fn().mockImplementation((a) => a * 2);
  expect(service.retornaNumeroAleatorio(2)).toBe(4);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(2);
})
test("Crie três funções e faça as devidas implementaçoes", () => {
  // service.upCaser=jest.fn().mockImplementation((string)=> string.toLowerCase());
  const mockUpCaser = jest.spyOn(service, 'upCaser');
  mockUpCaser.mockImplementation((string) => string.toLowerCase());
  service.firstLetter = jest.fn().mockImplementation((string) => string.charAt(string.length - 1));
  service.concat = jest.fn().mockImplementation((string1, string2, string3) => string1.concat(string2, string3));
  expect(mockUpCaser('FELIPE')).toBe('felipe');// 1 função
  expect(mockUpCaser).toHaveBeenCalled();
  expect(mockUpCaser).toHaveBeenCalledTimes(1);
  expect(mockUpCaser).toHaveBeenCalledWith('FELIPE');
  expect(service.firstLetter('Felipe')).toBe('e');// 2 função
  expect(service.firstLetter).toHaveBeenCalled();
  expect(service.firstLetter).toHaveBeenCalledTimes(1);
  expect(service.firstLetter).toHaveBeenCalledWith('Felipe');
  expect(service.concat('a', 'b', 'c')).toBe('abc');// 3 função
  expect(service.concat).toHaveBeenCalled();
  expect(service.concat).toHaveBeenCalledTimes(1);
  expect(service.concat).toHaveBeenCalledWith('a', 'b', 'c');
  service.upCaser.mockRestore();
  // service.upCaser=jest.fn();
  expect(service.upCaser('felipe')).toBe('FELIPE');
})
test('Crie uma função que faça requisição para a api dog pictures',() => {
  
})
