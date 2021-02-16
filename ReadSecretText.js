
const promisifyfs = require('./promisifyFs')

function getSecret(path) {
     
     return  promisifyfs.readFile(path)
         .then((data) => promisifyfs.readFile(data))
         .then((data) => promisifyfs.readFile(data))
         .catch((error) => {
             console.log(error)
             throw "error"
         })
}
//  getSecret("./file/one.txt").then(console.log).catch(console.log);

module.exports = {getSecret}