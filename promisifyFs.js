const fs = require('fs');

// fs.readFile('./abc.txt', 'utf-8' , (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })


// promisify basic fs
function readData(filePath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, 'utf-8' , (err, data) => {
         //   console.log(err, data);
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    });
}

// readFile('abc.txt').then(console.log)

module.exports = {readData};