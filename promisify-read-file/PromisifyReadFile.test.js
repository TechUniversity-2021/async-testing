
const PromisifyFs=require("./PromisifyReadFile")

test("Should resolve promise to 'how are you?' ",()=>{
    expect(PromisifyFs("./promisify-read-file/PromisifyReadFile")).resolves.toBe("how are you?")
})