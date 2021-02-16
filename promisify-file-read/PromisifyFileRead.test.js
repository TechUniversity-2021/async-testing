const promisifyFs = require("./PromisifyFileRead");
const fs = require('fs');

test("should resolve with value 'hey'", ()=> {
    jest.spyOn(fs,'readFile')
    .mockImplementation(function(path,options,callback){
        callback(null,'this is async');
    })
    return expect(promisifyFs.fread()).resolves.toBe('this is async');
    // promisifyFs.fread().then(function(data){
    //     expect(data).toEqual('hey');
    //     done();
    // });
});


test("should reject with value 'hey'", ()=> {
    jest.spyOn(fs,'readFile')
    .mockImplementation(function(path,options,callback){
        callback(new Error('hey'),null);
    })
    return expect(promisifyFs.fread()).rejects.toEqual(Error('hey'));
});