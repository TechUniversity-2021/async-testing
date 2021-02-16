const {promisifyFs}  = require("../promisify-file-read/PromisifyFileRead");

function seqFileRead(filePath) {
   return promisifyFs(filePath)   //./files/one.txt   returns ./files/two.txt
    .then(function (data){
        return promisifyFs(data);    //./files/two.txt   returns ./files/three.txt
    })
    .then(function (data){
        return promisifyFs(data);    //./files/three.txt   returns This is your secret!
    })
    .then(function (data) {
        return data    //This is your secret
    })
    .catch(function (error){
        throw error;
        //return new Error("An error occured");
    });
}

module.exports ={ seqFileRead };
