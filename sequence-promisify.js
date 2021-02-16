const fileOps = require("./promisifyFs.js")
function getSecret(){
return fileOps.readData("./files/a.txt")
.then(function(data){
   
  return  fileOps.readData(data)
 })
 .then(function(data1){
     return fileOps.readData(data1)
 })
.then(function(data2){
     return data2;
 }).catch(function(error){
        throw "error";
 })


}


// getSecret().then(function(data){
//     console.log(data);
// }).catch(err => console.log(err));

module.exports= {
    getSecret
}