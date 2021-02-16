const fileOps = require("./promisifyFs")

async function nestedReadFile(filePath) {
    const firstContent= await fileOps.readFile(filePath);
    const secondContent= await fileOps.readFile(firstContent);
    const thirdContent= await fileOps.readFile(secondContent);
    return thirdContent;
    
}

// (async function(){
//     const secretValue= await nestedReadFile("./files/one.txt")
//     console.log(secretValue);
// })();


module.exports = {
    nestedReadFile
}