const fileUtils = require("../FileUtils");

function getSecret(fileName) {
  return fileUtils
    .getData(fileName)
    .then((data) => {
      console.log("1", data);
      return fileUtils.getData(data);
    })
    .then((data) => {
      console.log("2", data);
      return fileUtils.getData(data);
    })
    .then(function (data) {
      console.log("3", data);
      return data;
    });
}

async function getSecretAsync(fileName) {
  const file1Output = await fileUtils.getData(fileName);
  const file2Output = await fileUtils.getData(file1Output);
  const file3Output = await fileUtils.getData(file2Output);
  return file3Output;
}
getSecretAsync("final/get-secret/files/file1.txt").then(console.log);
//getSecret("./files/file1.txt").then(console.log);
module.exports = { getSecret, getSecretAsync };
