const fs = require('fs')

const getData = (fileName) => {
   return new Promise(function (resolve, reject) {              // returns a promise that resolves the values inside the text file
        fs.readFile(fileName, 'utf-8', function(err, data){
            return err ? reject(err) : resolve(data);
        })
    }
    );
}

//getData('./Text.txt')
  //.then(console.log, console.log).catch(console.log);
  
module.exports = getData