const { it } = require('@jest/globals');

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('testando se test retorna TEST', (done) => {
  uppercase('test', (string) => {
    try {
      expect(string).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
})