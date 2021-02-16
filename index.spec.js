// const jest = require('jest');
const fs = require('fs');

const readFile = require('./promisifyFs');

xtest('integration file read error', (done) => {
     readFile('./abc.txt').then(data => {
         expect('hello world').toBe(data);
        done();
     });
});


xtest('integration file read error', (done) => {
    readFile('./abc1.txt').catch(err => {
        expect(`ENOENT: no such file or directory, open './abc1.txt'`).toBe(err.message);
       done();
    });
});


xtest('unit file read success', (done) => {
    jest.spyOn(fs, 'readFile')
      .mockImplementation((file, option, cb) => cb(null, 'xyz'));
    readFile('anyfile').then(data => {
        expect('xyz').toBe(data);
        done();
    });
});

xtest('unit file read fail', (done) => {
    jest.spyOn(fs, 'readFile')
      .mockImplementation((file, option, cb) => cb(new Error('demo'), null));
    readFile('anyfile').catch(err => {
        expect('demo').toBe(err.message);
        done();
    });
});