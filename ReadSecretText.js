
const {readFile} = require('./PromisifyFileRead')

function getSecret(path) {
     
     return  readFile(path)
         .then((data) => readFile(data))
         .then((data) => readFile(data))
         .catch((error) => {
             console.log(error)
             throw "error"
         })
        
    
       
    
}
//  getSecret("./file/one.txt").then(console.log).catch(console.log);

module.exports = {getSecret}