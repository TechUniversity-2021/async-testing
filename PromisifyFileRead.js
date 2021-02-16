const fs = require('fs')

const readFile = function(fileName){
   return new Promise( (resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if(err){
            reject(err)
        }
        else{
             resolve(data) 
            }
    })
    
   } )
    
}
// readFile('./abc.txt')
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((data) => {
//         return data
//     })


module.exports = {readFile}