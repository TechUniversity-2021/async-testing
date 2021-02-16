const fs= require("fs");

function promisifyFs(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,'utf-8',function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })

}

//promisifyFs('./testFile.txt').then(console.log).catch(console.log)

// fs.readFile('./testFile.txt', 'utf-8' , (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })

module.exports={
    promisifyFs
};