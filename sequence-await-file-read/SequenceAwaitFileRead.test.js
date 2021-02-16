const fs = require('fs');
const sequenceFileRead = require('./SequenceAwaitFileRead');
const promiseRead = require('../promisify-file-read/PromisifyFileRead');

test("sequence should resolve with 'abc,def,ghi'", (done) => {
  const readFileSpy = jest.spyOn(promiseRead, 'fread');
  readFileSpy.mockResolvedValueOnce('abc')
    .mockResolvedValueOnce('def')
    .mockResolvedValueOnce('ghi');

  sequenceFileRead.fileOps('./files/one.txt').then((data) => {
    expect(readFileSpy).toHaveBeenNthCalledWith(1, './files/one.txt');
    expect(readFileSpy).toHaveBeenNthCalledWith(2, 'abc');
    expect(readFileSpy).toHaveBeenNthCalledWith(3, 'def');
    expect(data).toBe('ghi');
    done();
  });
});

test("should resolve with value 'This is your secret'", () => expect(sequenceFileRead.fileOps('./files/one.txt')).resolves.toBe('This is your secret'));

test("mock fs should resolve with value 'This is your secret'", () => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((path, options, callback) => {
      callback(null, 'This is your secret');
    });
  return expect(sequenceFileRead.fileOps('./files/one.txt')).resolves.toBe('This is your secret');
});

test("mock fs should rejects with 'error' ", () => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((path, options, callback) => {
      callback(new Error('error'), null);
    });
  return expect(sequenceFileRead.fileOps('./files/one1.txt')).rejects.toEqual(Error('error'));
});

test("fread should resolve with 'This is Resolved' ", () => {
  jest.spyOn(promiseRead, 'fread')
    .mockResolvedValue('This is Resolved');
  return expect(sequenceFileRead.fileOps('./files/one.txt')).resolves.toBe('This is Resolved');
});
