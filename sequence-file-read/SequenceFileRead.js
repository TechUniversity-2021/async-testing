const fileOps = require("../promisify-file-read/PromisifyFileRead");

//destructuring creates a shallow copy for all the objects, it will no longer point to the same object reference
//spread operator also creates a new shallow copy
//objects are copied by reference

function seqFileRead(filePath) {
  return fileOps
    .promisifyFs(filePath) //./files/one.txt   returns ./files/two.txt
    .then(function (data) {
      return fileOps.promisifyFs(data); //./files/two.txt   returns ./files/three.txt
    })
    .then(function (data) {
      return fileOps.promisifyFs(data); //./files/three.txt   returns This is your secret!
    })
    .catch(function (error) {
      throw error;
      //return new Error("An error occured");
    });
}

module.exports = { seqFileRead };
