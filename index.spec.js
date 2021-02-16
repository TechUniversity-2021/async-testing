// const jest = require('jest');
const fs = require('fs');

const readFile = require('./promisifyFs');

test.skip('integration file read error', (done) => {
  readFile('./abc.txt').then((data) => {
    expect('hello world').toBe(data);
    done();
  });
});

test.skip('integration file read error', (done) => {
  readFile('./abc1.txt').catch((err) => {
    expect('ENOENT: no such file or directory, open \'./abc1.txt\'').toBe(err.message);
    done();
  });
});

test.skip('unit file read success', (done) => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((file, option, cb) => cb(null, 'xyz'));
  readFile('anyfile').then((data) => {
    expect('xyz').toBe(data);
    done();
  });
});

test.skip('unit file read fail', (done) => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((file, option, cb) => cb(new Error('demo'), null));
  readFile('anyfile').catch((err) => {
    expect('demo').toBe(err.message);
    done();
  });
});
