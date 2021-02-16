const promisifyFs = require("./PromisifyFileRead");
const fs = require('fs');

test("Should resolve a promise to '21,34,43,57,'Anukriti'' ", () => {
    return expect(promisifyFs("./promisify-file-read/testFile.txt")).resolves.toBe(
      '21,34,43,57,"Anukriti"');
    //done();
});


test('Unit testing', (done) => {
  jest.spyOn(fs, 'readFile').mockImplementation((file, option, callback) => callback(null, '21,34,43,57,"Anukriti"'));
  promisifyFs('randomFile').then(text => {
      expect(text).toBe('21,34,43,57,"Anukriti"');
      done();
  });
});