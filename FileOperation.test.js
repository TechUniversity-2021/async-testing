const readOp= require("./FileOperation")

const readFile = require("./index")

const filePath= "./files/one.txt"
test("Resolve function", ()=>{
    return expect(readFile.nestedFile()).resolves.toBe("This is your secret");
})

test("Reject function", ()=>{
    return expect(readFile.nestedFile()).rejects.toBe("");
})

test('unit file read is sucess', function(){
    jest.spyOn(readFile, "readFileMakePromise")
    .mockResolvedValue('abc');
    readOp.nestedFile().then(data=>{
        expect(data).toBe("abc");
    })
})