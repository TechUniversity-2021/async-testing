
const promisifyFs=require("./PromisifyReadFile")
const fs=require("fs")
test("Should resolve promise to 'how are you?' ",()=>{
    expect(promisifyFs("./promisify-read-file/test.txt")).resolves.toBe("how are you?")
})

test('Unit testing by mocking', (done) => {
    jest.spyOn(fs, 'readFile').mockImplementation((file, option, callback) => callback(null, 'how are you?'));
    promisifyFs('abcd').then(text => {
        expect(text).toBe('how are you?');
        done();
    });
  }); 