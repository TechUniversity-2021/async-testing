const getData = require('./PromisifyFile');
const fs = require('fs');
const { error } = require('console');

test('promise should resolve with a value Hello World', (done) => { 
    jest.spyOn(fs, 'readFile').mockImplementation((file, fileType, callBack) =>    // mocking a file to do unit testing
        callBack(null, 'Hello World!'));
    getData('anyfile').then(data => { 
        expect('Hello World!').toBe(data)
        done();
        })
})



test('promise should resolve with Hello World!', () => {
  return expect(getData('./Text.txt')).resolves.toBe('Hello World!');
});

test('promise should reject with Error', (done) => { 
    jest.spyOn(fs, 'readFile').mockImplementation((file, fileType, callBack) => 
        callBack(new Error('Demo'), null));
    getData('anyfile').catch(error => { 
        expect('Demo').toBe(error.message)
        done();
        })
})