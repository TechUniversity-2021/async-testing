const promiseFs = require('../promisify-file-read/promisifyFileRead');

async function fileOps(path) {
  const contentOne = await promiseFs.fread(path);
  const contentTwo = await promiseFs.fread(contentOne);
  const contentThree = await promiseFs.fread(contentTwo);
  return contentThree;
}

module.exports = {
  fileOps,
};
