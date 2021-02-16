const fs = require('fs');

function fread(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,'utf-8', function(err, data){ 
            if(err) reject(err);
            resolve(data);
    
        });
    
    });

}


module.exports  = {
    fread
}

