const promisifyFs = require("./PromisifyFileRead");

test("Should resolve a promise to '21,34,43,57,'Anukriti'' ", () => {
    return expect(promisifyFs("./promisify-file-read/testFile.txt")).resolves.toBe(
      '21,34,43,57,"Anukriti"');
    //done();
});
