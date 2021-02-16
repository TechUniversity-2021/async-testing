const {seqFileRead}=require("./SequenceFileRead");
const fileOps =require("../promisify-file-read/PromisifyFileRead");

test("Promise resolves to 'This is your secret!' ",function(){
    const result= seqFileRead('./files/one.txt');
    //console.log(result);
    return expect(seqFileRead('./files/one.txt')).resolves.toBe("This is your secret!");
})

test("Promise rejects ",function(done){
    seqFileRead('./files/onet.txt').catch(function (error){
        expect(error.code).toBe("ENOENT");
        done();
    })
    //return expect(seqFileRead('./files/onet.txt')).rejects.toEqual(new Error("An error occured!"));
})

test("Unit test for promise resolves ",function(done){
    // jest.spyOn(fileOps,"promisifyFs").mockImplementation(function(fileName){
    //     return Promise()
    // })

    // const result= seqFileRead('./files/one.txt');
    // //console.log(result);
    // return expect(seqFileRead('./files/one.txt')).resolves.toBe("This is your secret!");
    console.log(fileOps);
    jest.spyOn(fileOps,"promisifyFs").mockResolvedValue("RandomString");
    seqFileRead('./files/one.txt').then(function(data){
        expect(data).toBe("RandomString");
        done();
    })
})