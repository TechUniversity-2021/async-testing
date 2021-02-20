const { getText } = require("./PromisifyFileRead");
const fs = require('fs');
//const { doesNotMatch } = require("assert");

//xtest to skip test
test('should resolve with value 12345 ', () => {
    //dont want to read file here
    //mocking a callback, not a promise
    jest.spyOn(fs, 'readFile')
        .mockImplementation(function (path, options, callback) {
            callback(null, '12345');
        })
    //if the callback is called, we can assume it has been mocked

    // getText().then(function(data) {
    //     expect(data).toBe('12345');
    //     done();
    // })
    expect(getText('random file')).resolves.toBe('12345')
    //return expect(getText('random file')).resolves.toBe('12345')
    //return acts like done

    //why this will fail without done, but line 10 doesnt

});





