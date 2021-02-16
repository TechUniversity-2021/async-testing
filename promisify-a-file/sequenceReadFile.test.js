const seqReadFile  = require("./sequenceReadFile");

test("Promise resolves to 'This is your secret!' ",function(){
    return expect(seqReadFile.nestedReadFile('../files/one.txt')).resolves.toBe("This is your secret");
})

test("Promise rejects ",function(done){
    seqReadFile.nestedReadFile('../files/one1.txt').catch(function (error){
        expect(error.message).toBe("Meghana");
        done();
    })
    //return expect(seqReadFile.nestedReadFile('../files/one1.txt')).rejects.toBe("Meghana");
})