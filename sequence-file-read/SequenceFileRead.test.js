const { seqFileRead } = require("./SequenceFileRead");
const { seqFileReadAwait } = require("./SequenceFileReadAwait");
const fileOps = require("../promisify-file-read/PromisifyFileRead");

test("Promise resolves to 'This is your secret!' ", function () {
  const result = seqFileRead("./files/one.txt");
  return expect(seqFileRead("./files/one.txt")).resolves.toBe(
    "This is your secret!"
  );
});

test("Promise rejects ", function (done) {
  seqFileRead("./files/onet.txt").catch(function (error) {
    expect(error.code).toBe("ENOENT");
    done();
  });
});

test("Unit test for promise resolves ", function (done) {
  const readFileSpy = jest.spyOn(fileOps, "promisifyFs");
  readFileSpy
    .mockResolvedValueOnce("abc")
    .mockResolvedValueOnce("def")
    .mockResolvedValueOnce("ghi");
  seqFileRead("dummyFile.txt").then(function (data) {
    expect(readFileSpy).toHaveBeenNthCalledWith(1, "dummyFile.txt");
    expect(readFileSpy).toHaveBeenNthCalledWith(2, "abc");
    expect(readFileSpy).toHaveBeenNthCalledWith(3, "def");
    expect(data).toBe("ghi");
    done();
  });
});

test("Unit test for promise resolves for async await function ", async function () {
  const readFileSpy = jest.spyOn(fileOps, "promisifyFs");
  readFileSpy
    .mockResolvedValueOnce("abc")
    .mockResolvedValueOnce("def")
    .mockResolvedValueOnce("ghi");
  const result = await seqFileReadAwait("dummyFile.txt");
  expect(readFileSpy).toHaveBeenNthCalledWith(1, "dummyFile.txt");
  expect(readFileSpy).toHaveBeenNthCalledWith(2, "abc");
  expect(readFileSpy).toHaveBeenNthCalledWith(3, "def");
  expect(result).toBe("ghi");
});
