const secretRead = require("./ReadSecretText");
const promisifyfs = require('../promisify/promisifyFs')

test('promise should resolved with This is a secret', () => {
    return expect(secretRead.getSecret("./file/one.txt")).resolves.toBe('This is a secret');
  });

  test('promise should reject ', () => {
        return expect(secretRead.getSecret("./file/xyz.txt")).rejects.toBe("error");
  });

  test('promise should resolve ', () => {
    jest.spyOn(promisifyfs, "readFile")
      .mockResolvedValue('resolved')
      expect(secretRead.getSecret("./file/one.txt")).resolves.toBe('resolved');
});