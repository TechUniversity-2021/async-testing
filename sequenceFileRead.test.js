const {executePromises}=require("./SequenceFileRead");
const fileOps=require("./promisify-file-read/PromisifyFileRead")
const { readMultipleFiles } = require("./AsyncSequenceFileRead");

test("Promise resolves to Secret Message ", function()
{
    return expect(executePromises('./files/one.txt')).resolves.toBe("Secret Message");
})

// test("Promise rejects", function(done)
// {
//     result.executePromises('random file');
//     const spy = jest.spyOn(console, "log");  
//     expect(spy).toHaveBeenCalledWith("This is an error");
//     done();


//     //return expect(result.executePromises('./files/hi/one.txt')).rejects.toBe(new Error("An error has occured"));
// })

test("Promise rejects ",function(done){
    executePromises('./files/hi/one.txt').catch(function (error){
        expect(error.code).toBe("ENOENT");
        done();
    })
})

xtest("Unit test for promise resolves ",function(done){

    jest.spyOn(fileOps,"getText").mockResolvedValue("RandomString");
    executePromises('./files/one.txt').then(function(data){
        expect(data).toBe("RandomString");
        done();
    })
})

test("Unit test for promise resolves ",function(done){
    const readFileSpy=jest.spyOn(fileOps, "getText");
    readFileSpy.mockResolvedValueOnce('abc')
    readFileSpy.mockResolvedValueOnce('def')
    readFileSpy.mockResolvedValueOnce('ghi')

    executePromises("dummyfile.txt").then(function(data) {
    expect(readFileSpy).toHaveBeenNthCalledWith(1, "dummyfile.txt")
    expect(readFileSpy).toHaveBeenNthCalledWith(2, "abc")
    expect(readFileSpy).toHaveBeenNthCalledWith(3, "def")
    expect(data).toBe("ghi")
    done();

    })
    //expect(readFileSpy).toHaveBeenNthCallWith(2, 'ghi')

    //return expect(executePromises('dummyfile.txt')).resolves.toBe('ghi')



});

test("Unit test for promise resolves ", async function(){
    const readFileSpy=jest.spyOn(fileOps, "getText");
    readFileSpy.mockResolvedValueOnce('abc');
    readFileSpy.mockResolvedValueOnce('def');
    readFileSpy.mockResolvedValueOnce('ghi');


    const result = await readMultipleFiles("dummyfile.txt");
    expect(readFileSpy).toHaveBeenNthCalledWith(1, "dummyfile.txt");
    expect(readFileSpy).toHaveBeenNthCalledWith(2, "abc");
    expect(readFileSpy).toHaveBeenNthCalledWith(3, "def");
    expect(result).toBe("ghi");

    });
    //expect(readFileSpy).toHaveBeenNthCallWith(2, 'ghi')

    //return expect(executePromises('dummyfile.txt')).resolves.toBe('ghi')




