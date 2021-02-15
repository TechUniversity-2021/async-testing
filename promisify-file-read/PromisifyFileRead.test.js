const getText= require("./PromisifyFileRead");

test('should resolve with value 12345 ', ()=> {
    return(expect(getText('./promisify-file-read/TestFile.txt')).resolves.toBe('12345'))
});