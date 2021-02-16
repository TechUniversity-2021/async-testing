const promisifyFs = require("./PromisifyFileRead");
const fs = require('fs');

test("Should resolve a promise to '21,34,43,57,'Anukriti'' ", function () {
    return expect(promisifyFs("./promisify-file-read/testFile.txt")).resolves.toBe(
      '21,34,43,57,"Anukriti"');
    //done();
});


test('Unit testing for resolved', function(done){
  jest.spyOn(fs, 'readFile').mockImplementation(function(file, option, callback){callback(null, '21,34,43,57,"Anukriti"')});
  promisifyFs('randomFile').then(function (text) {
      expect(text).toBe('21,34,43,57,"Anukriti"');
      done();
  });
});

test('Unit testing for resolved using .resolves', function(done){
  jest.spyOn(fs, 'readFile').mockImplementation(function(file, option, callback){callback(null, '21,34,43,57,"Anukriti"')});
  return expect(promisifyFs('randomFile').resolves.toBe('21,34,43,57,"Anukriti"'));
});

test('Unit testing for rejected',function(done){
  jest.spyOn(fs, 'readFile').mockImplementation(function(file, option, callback){callback(null, '21,34,43,57,"Anukriti"')});

})