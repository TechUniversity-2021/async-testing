const promisify= require("./promisify-file-read/PromisifyFileRead");

function executePromises(filePath)
{
    return promisify.getText(filePath)   
    .then(function (data){
        return promisify.getText(data);    
    })
    .then(function (data){
        return promisify.getText(data);    
    })
    .then(function (data) {
        return data    
    })
    .catch(function (error){
        throw error;
    });
}

module.exports = {executePromises} ;


// const executePromises = (pathname) => {
//     return first(pathname).then(second).then(third).then((message) => {
//         return message;
//     }).catch((err)=> {
//         //console.log("This is an error")
//         throw new Error("An error has occured");
//         //throw err;
//     });
// }

// executePromises("./files/one.txt");
// module.exports={executePromises};
// -------

// const {promisifyFs}  = require("../promisify-file-read/PromisifyFileRead");

// function seqFileRead(filePath) {
//    return promisifyFs(filePath)   //./files/one.txt   returns ./files/two.txt
//     .then(function (data){
//         return promisifyFs(data);    //./files/two.txt   returns ./files/three.txt
//     })
//     .then(function (data){
//         return promisifyFs(data);    //./files/three.txt   returns This is your secret!
//     })
//     .then(function (data) {
//         return data    //This is your secret
//     })
//     .catch(function (error){
//         throw error;
//         //return new Error("An error occured");
//     });
// }

// module.exports ={ seqFileRead };