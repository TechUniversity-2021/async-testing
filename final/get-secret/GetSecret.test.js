const fileUtils = require("../FileUtils");
const { getSecret, getSecretAsync } = require("./GetSecret");

//mock implementation
test("promise should resolve to Hello world and print its", function (done) {
  jest.spyOn(fileUtils, "getData").mockResolvedValueOnce("abc");
  jest.spyOn(fileUtils, "getData").mockResolvedValueOnce("def");
  jest.spyOn(fileUtils, "getData").mockResolvedValueOnce("ghi");
  getSecretAsync("lala.txt").then((data) => {
    expect(data).toBe("ghi");
    console.log(data);
    done();
    //expect(data).toBe("Hello world");
  });
});
