const promsifyRead = require("./ReadSecretText");
const fs = require('fs');

test('promise should resolved with This is a secret', () => {
    return expect(promsifyRead.getSecret("./file/one.txt")).resolves.toBe('This is a secret');
  });

  test('promise should reject ', () => {
        return expect(promsifyRead.getSecret("./file/xyz.txt")).rejects.toBe("error");
  });

  test('promise should resolve ', () => {
    jest.spyOn(promsifyRead, "getSecret")
      .mockResolvedValue('resolved')
      expect(promsifyRead.getSecret("./file/one.txt")).resolves.toBe('resolved');

});

