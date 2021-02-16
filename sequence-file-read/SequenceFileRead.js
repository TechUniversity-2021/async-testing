const promiseFs = require("../promisify-file-read/promisifyFileRead");

function fileOps(path){
    return promiseFs.fread(path)
    .then(function(path){
        return promiseFs.fread(path)
    })
    .then(function(path){
        return promiseFs.fread(path)
    })
    .then(function(data){
        return data;
    })
}


module.exports  = {
    fileOps
}


