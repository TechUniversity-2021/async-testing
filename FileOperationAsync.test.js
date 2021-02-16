const fileOp= require("./FileOperationAsync")
const readOps = require("./promisifyFs")

const filePath= "./files/one.txt"

test("Resolve test", ()=>{
    return expect(fileOp.nestedReadFile("./files/one.txt")).resolves.toBe("This is your secret");
})

test("Reject test", ()=>{
        fileOp.nestedReadFile("./files/one.txt").catch(error=>{
            expect(error.message).toBe("ENOENT: no such file or directory, open './files/one1.txt'")
            done();
        })
    //return expect(readOp.nestedFile()).rejects.toEqual("error");
})

test('unit file read is sucess', function(done){
    const readFileSpy= jest.spyOn(readOps, "readFile");
    readFileSpy.mockResolvedValueOnce('abc')
    .mockResolvedValueOnce('def')
    .mockResolvedValueOnce('ghi');
    fileOp.nestedReadFile("./files/one.txt").then(data=>{
        expect(readFileSpy).toHaveBeenNthCalledWith(1, "./files/one.txt")
        expect(readFileSpy).toHaveBeenNthCalledWith(2, 'abc')
        expect(readFileSpy).toHaveBeenNthCalledWith(3, 'def')
        expect(data).toBe('ghi')
        // console.log(data);
        done();
    })
})