const fs = require('fs');

// fs.readFile('./abc.txt', 'utf-8' , (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })


// promisify basic fs
const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8' , (err, data) => {
            console.log(err, data);
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    });
}

// readFile('abc.txt').then(console.log)

module.exports = {readFile};