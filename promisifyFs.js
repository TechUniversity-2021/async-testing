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
            //console.log(err, data);
            if (err) {
                reject(err);
            }
            //console.log(data);
            resolve(data);
        })
    });
}

// readFile("./files/one.txt");
// console.log(readFile);

//readFile('abc.txt').then(console.log)

module.exports = {readFile};