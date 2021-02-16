const promisifyFs = require("./promisifyFs")

const fs = require('fs');

test("should resolve", () => {
    jest.spyOn(fs, 'readFile')
    .mockImplementation(function(path,options,callback){
        callback(null, "abc")
    })
    return expect(promisifyFs.readFile()).resolves.toBe("abc")
})

test("should resolve", () => {
    jest.spyOn(fs, 'readFile')
    .mockImplementation(function(path,options,callback){
        callback("abc", null)
    })
    return expect(promisifyFs.readFile()).rejects.toBe("abc")
})