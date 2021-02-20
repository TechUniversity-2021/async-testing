//const { TestScheduler } = require("jest");
const {getText}= require("./FileRead");

test("should resolve with value hello world", ()=> {
    expect(getText("/Users/Asmita_Hajra/async-testing/abc.txt")).resolves.toBe('hello world');
})
