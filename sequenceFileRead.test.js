const {seqFileRead}=require("./SequenceFileRead");
const fileOps= require("./promisifyFs");
const { readMultipleFiles } = require("./AsyncSequenceFileRead");

//5 to 18 integration testing, need to write unit testing for these
xtest("Promise resolves to Secret Message ", function()
{
    //return expect(seqFileRead('./files/one.txt')).resolves.toBe("Secret Message");
    expect(seqFileRead('./files/one.txt')).resolves.toBe("Secret Message");
})

xtest("Promise rejects ", function()
{
    return expect(seqFileRead('./files/hi/one.txt')).rejects.toEqual(new Error("An error occured"));
    //do try catch and match exact code/message
    //if mocking can do as is
    //pass done, call seq file, prov name, catch error in catch/ 2nd arg of then, and compare error.message/error.code
    //
})

xtest("Promise rejects ",function(done){
    seqFileRead('./files/hi/one.txt').catch(function (error){
        expect(error.code).toBe("ENOENT");
        done();
    })
})

// test("Promise rejects", function(done)
// {
//     result.executePromises('random file');
//     const spy = jest.spyOn(console, "log");  
//     expect(spy).toHaveBeenCalledWith("This is an error");
//     done();


//     //return expect(result.executePromises('./files/hi/one.txt')).rejects.toBe(new Error("An error has occured"));
// })


xtest("Unit test for promise resolves ",function(done){

    jest.spyOn(fileOps,"readFile").mockResolvedValue("RandomString");
    seqFileRead('./files/one.txt').then(function(data){
        expect(data).toBe("RandomString");
        done();
    })
})


xtest("Unit test for promise resolves ",function(){

    jest.spyOn(fileOps,"readFile").mockResolvedValue("RandomString");
    expect(seqFileRead('./files/one.txt')).resolves.toBe("RandomString");
});

// xtest("Unit test for promise resolves ",function(done){
//     const readFileSpy=jest.spyOn(fileOps, "readFile");
//     readFileSpy.mockResolvedValueOnce('abc')
//     readFileSpy.mockResolvedValueOnce('def')
//     readFileSpy.mockResolvedValueOnce('ghi')

//     seqFileRead("dummyfile.txt").then(function(data) {
//     expect(readFileSpy).toHaveBeenNthCalledWith(1, "dummyfile.txt")
//     expect(readFileSpy).toHaveBeenNthCalledWith(2, "abc")
//     expect(readFileSpy).toHaveBeenNthCalledWith(3, "def")
//     expect(data).toBe("ghi")
//     done();

//     })
//     //expect(readFileSpy).toHaveBeenNthCallWith(2, 'ghi')

//     //return expect(executePromises('dummyfile.txt')).resolves.toBe('ghi')


// });

xtest("Unit test for promise resolves", (done)=> {
    const readFileSpy=jest.spyOn(fileOps, 'readFile');
    readFileSpy.mockResolvedValueOnce("abc")
                .mockResolvedValueOnce("def")
                .mockResolvedValueOnce("ghi")

    seqFileRead("dummy.txt").then(function(data) {
        expect(readFileSpy).toHaveBeenNthCalledWith(1, "dummy.txt")
        expect(readFileSpy).toHaveBeenNthCalledWith(2, "abc")
        expect(readFileSpy).toHaveBeenNthCalledWith(3, "def")
        expect(data).toBe("ghi")
        done();
    });

});

test("Unit test for promise resolves ", async function(){
    const readFileSpy=jest.spyOn(fileOps, "readFile");
    readFileSpy.mockResolvedValueOnce("abc");
    readFileSpy.mockResolvedValueOnce("def");
    readFileSpy.mockResolvedValueOnce("ghi");


    const result = await readMultipleFiles("dummyfile.txt");
    expect(readFileSpy).toHaveBeenNthCalledWith(1, "dummyfile.txt");
    expect(readFileSpy).toHaveBeenNthCalledWith(2, "abc");
    expect(readFileSpy).toHaveBeenNthCalledWith(3, "def");
    expect(result).toBe("ghi");

    });
    //expect(readFileSpy).toHaveBeenNthCallWith(2, 'ghi')

    //return expect(executePromises('dummyfile.txt')).resolves.toBe('ghi')




