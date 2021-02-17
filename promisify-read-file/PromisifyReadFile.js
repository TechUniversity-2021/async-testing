
const fs=require("fs")

function promisifyFs(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,'utf-8',(err,data)=>{
            if(!err){
                resolve(data);
            }
            else{
                reject(err)
            }
        })
    })
}

module.exports=promisifyFs