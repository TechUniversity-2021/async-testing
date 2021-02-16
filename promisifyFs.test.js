const fs = require('fs');

const readData =  require('./promisifyFs.js');



xtest("Integration test read file ", () => {
   return readData('./abc.txt').then (data => {
        expect('hello world').toBe(data);
      
    })
})

xtest("Unit testing ",(done) => {
    jest.spyOn(fs, 'readFile')
    .mockImplementation((file, option, cb)=> cb(null, 'nmo'));
    readData('anyfile').then(data => {
        expect('nmo').toBe(data);
        done();
    });
});

xtest('unit file rfail', (done) => {
    jest.spyOn(fs, 'readFile')
      .mockImplementation((file, option, cb) => cb(new Error('reject'), null));
  
        expect(readData('anyfile')).rejects.toEqual(Error('reject'));
        done();
    });
