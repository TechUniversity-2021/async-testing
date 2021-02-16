const promisifyFs= require("./PromisifyFileRead");
const fs= require('fs');

//xtest to skip test
test('should resolve with value 12345 ', ()=> {
    jest.spyOn(fs, 'readFile')
    .mockImplementation(function(path, options, callback) {
        callback(null, '12345');
    })
    //return(expect(getText('./promisify-file-read/TestFile.txt')).resolves.toBe('12345'))
    //return expect(promisifyFs.getText('./promisify-file-read/TestFile.txt')).resolves.toBe('12345')
    return expect(promisifyFs.getText('random file')).resolves.toBe('12345')
    //return expect(promisifyFs.getText()).resolves.toBe('12345');
    // promisifyFs.getText().then(function(data){
    //     expect(data).toBe('hey');
    // });

    //why this will fail without done, but line 10 doesnt

});

test('should resolve with value 12345 ', ()=> {
    jest.spyOn(fs, 'readFile')
    .mockImplementation(function(path, options, callback) {
        callback(new Error('this is an error'), null);
    })
    //return(expect(getText('./promisify-file-read/TestFile.txt')).resolves.toBe('12345'))
    return expect(promisifyFs.getText('xyz file')).rejects.toEqual(new Error('this is an error'))


});

