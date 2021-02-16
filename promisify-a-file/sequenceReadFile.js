const fileOps = require('./PromisifyFile')


function nestedReadFile(filename1) { 
    return fileOps.getData(filename1)
        .then(function (data) {
            return fileOps.getData(data)
    })
        .then(function(filename2){
            return fileOps.getData(filename2)
        })
        .then(function (data) {
            return data;
    }).catch(function(err) {
        throw Error("Meghana")
    })

}  

// nestedReadFile('../files1/one.txt').then(function(filedata){
//     console.log(filedata)
// }).catch(function(err) {
//     console.log(err.message)
// })

module.exports = { nestedReadFile }