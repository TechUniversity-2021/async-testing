const fs= require('fs');

function getText(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, "utf-8", function (err, data) {
            if(err) reject(err);
            resolve(data);
        });
    });
}

module.exports={getText}