const fs = require('fs');
const promisifyFs = require('./PromisifyFileRead');

test("should resolve with value 'hey'", () => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((path, options, callback) => {
      callback(null, 'this is async');
    });
  return expect(promisifyFs.fread()).resolves.toBe('this is async');
});

test("should reject with value 'hey'", () => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((path, options, callback) => {
      callback(new Error('hey'), null);
    });
  return expect(promisifyFs.fread()).rejects.toEqual(Error('hey'));
});
