const fs= require('fs');

// fs.readFile('./abc.txt', 'utf-8', (err, data)=>{
//     if(err) {
//         console.log(data);
//     }
//     console.log(data);
// })

function getText(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, "utf-8", function (err, data) {
            if(err) reject(err);
            resolve(data);
        });
    });
}

//getText("./TestFile.txt").then(console.log).catch(console.log);

module.exports= getText;