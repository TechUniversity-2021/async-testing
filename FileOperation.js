const readFile = require("./index")

function nestedReadFile(filePath) {
    return readFile.readFileMakePromise(filePath)
        .then(data => readFile.readFileMakePromise(data))
        .then(data => readFile.readFileMakePromise(data))
        .then((data)=>  data)
        .catch(function (err) {
            return (err.message);
            // throw err;
        })
}

function nestedFile(){
    return nestedReadFile("./files/one.txt").then(data=> data).catch(err=>console.log(err))
}
nestedFile().then(console.log)

module.exports = {
    nestedFile
}

// function nestedReadFile(filePath) {
//     return readFileMakePromise(filePath)
//         .then(data => readFileMakePromise(data))
//         .then(data => readFileMakePromise(data))
//         .then((data)=>  data)
//         .catch(function (err) {
//             return (err.message);
//         })
// }

//nested Then
// function nestedReadFile(filePath) {
//     return readFileMakePromise(filePath)
//         .then(data => readFileMakePromise(data)
//             .then(data => readFileMakePromise(data)
//                 .then(function (data) {
//                     return data;
//                 })))
//         .catch(function (err) {
//             return (err.message);
//         })
// }
