const fileOps = require("../promisify-file-read/PromisifyFileRead");

async function seqFileReadAwait(filePath) {
    const file1Content=await fileOps.promisifyFs(filePath);
    const file2Content=await fileOps.promisifyFs(file1Content);
    const file3Content=await fileOps.promisifyFs(file2Content);
    return file3Content;
}

// (async function(){
//     const file3Content=await seqFileReadAwait('./files/one.txt');
//     console.log(file3Content);
//     console.log(1);
// })();
// console.log(2);


module.exports = { seqFileReadAwait };
