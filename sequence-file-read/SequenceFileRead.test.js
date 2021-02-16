const {fileOps} = require("./SequenceFileRead");
const promiseRead = require("../promisify-file-read/PromisifyFileRead");
const fs = require('fs');

test("should resolve with value 'This is your secret'", ()=> {

    return expect(fileOps('./files/one.txt')).resolves.toBe('This is your secret');
  
});


test("mock fs should resolve with value 'This is your secret'", ()=> {

    jest.spyOn(fs,'readFile')
    .mockImplementation(function(path,options,callback){
        callback(null,'This is your secret');
    })
    return expect(fileOps('./files/one.txt')).resolves.toBe('This is your secret');
  
});

test("mock fs should rejects with 'error' ", ()=> {

    jest.spyOn(fs,'readFile')
    .mockImplementation(function(path,options,callback){
        callback(new Error('error'),null);
    })
    return expect(fileOps('./files/one1.txt')).rejects.toEqual(Error('error'));
});

test("fread should resolve with 'This is Resolved' ", ()=> {

    jest.spyOn(promiseRead,'fread')
    .mockResolvedValue('This is Resolved');
    return expect(fileOps('./files/one.txt')).resolves.toBe('This is Resolved');
});