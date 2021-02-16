const {executePromises}=require("./SequenceFileRead");
const fileOps=require("./promisify-file-read/PromisifyFileRead")

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

test("Unit test for promise resolves ",function(done){
    
    jest.spyOn(fileOps,"getText").mockResolvedValue("RandomString");
    executePromises('./files/one.txt').then(function(data){
        expect(data).toBe("RandomString");
        done();
    })
})