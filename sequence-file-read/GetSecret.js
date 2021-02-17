//const fs = require("./promisifyFs");
const fileUtils = require("../promisify-read-file/PromisifyReadFile");

function getSecret(fileName) {
  return fileUtils
    .promisifyFs(fileName)
    .then(fileUtils.promisifyFs)
    .then(fileUtils.promisifyFs)
    .then(function (data) {
      return data;
    });
}

async function getSecretAsync(fileName) {
    const file1output=await fileUtils.promisifyFs(fileName)

    const file2output=await fileUtils.promisifyFs(file1output)
    const file3output=await fileUtils.promisifyFs(file2output)

    return file3output;

} 
//getSecretAsync("./files/1.txt").then(console.log)
//getSecret("./files/1.txt").then(console.log);
module.exports = {getSecret,getSecretAsync};