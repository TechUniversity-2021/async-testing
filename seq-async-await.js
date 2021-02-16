const fileOps = require("./promisifyFs.js")

async function getSecret(){
    const fileOneContent= await fileOps.readData('./files/a.txt')
    const fileTwoContent= await fileOps.readData(fileOneContent)
    const fileThreeContent=await fileOps.readData(fileTwoContent)
   // console.log(fileThreeContent);
   return fileThreeContent;
 }
(async function(){
    const secretMessage= await getSecret('./files/a.txt')
    console.log(secretMessage);
})()


 module.exports = {getSecret}