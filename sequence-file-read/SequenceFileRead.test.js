const {seqFileRead}=require("./SequenceFileRead");

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
