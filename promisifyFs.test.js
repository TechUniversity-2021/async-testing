const fs = require('fs');

const readData =  require('./promisifyFs.js');

test("Integration test read file ", () => {
   return readData('./abc.txt').then (data => {
        expect('hello world').toBe(data);
      
    })
})