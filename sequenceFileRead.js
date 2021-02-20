//-------------
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

const fileOps= require("./promisifyFs");

function seqFileRead(filePath) {
    //have to return this
   return fileOps.readFile(filePath)   
    .then(function (data){
        return fileOps.readFile(data);    
    })
    .then(function (data){
        return fileOps.readFile(data);   
    })
    .then(function (data) {
        //console.log(typeof data)
        return data   
    })
    .catch(function (error){
        //throw new Error(("An error occured"));
        throw error;
        //if you return will treat like output of promise
        //return new Error("An error occured");
    });
}
//seqFileRead("./files/one.txt");

module.exports ={seqFileRead};

// const fileOps= require("./promisifyFs");

// function seqFileRead(filepath) {
//      fileOps.readFile(filepath).then(function (data) {
//          fileOps.readFile(data)
//     }).then(function(data) {
//          fileOps.readFile(data)
//     }).then(function(data) {
//         console.log(data);
//         return data;
//     })
//     .catch(function(error) {
//         throw error;
//     });
// }

// seqFileRead("./files/one.txt");
// //console.log(data);
