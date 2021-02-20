//const fileOps= require("./promisify-file-read/PromisifyFileRead")

// async function readMultipleFiles(path) {
//     const fileOneContent =await fileOps.getText(path)
//     const fileTwoContent =await fileOps.getText(fileOneContent)
//     const fileThreeContent =await fileOps.getText(fileTwoContent)
//     return fileThreeContent;
//     //console.log(1)
// }

const fileOps= require("./promisifyFs")

async function readMultipleFiles(path) {
    const fileOneContent= await fileOps.readFile(path);
    const fileTwoContent= await fileOps.readFile(fileOneContent);
    const fileThreeContent= await fileOps.readFile(fileTwoContent);
    return fileThreeContent;

}

// async function test() {
//     const fileContent= await readMultipleFiles('./files/one.txt');
//     console.log(fileContent);
// }

// test();

//const fileContent=await readMultipleFiles(); error
//console.log(fileContent);

// (async function() { 
//     const secretValue= await readMultipleFiles('./files/one.txt')
//     console.log(secretValue)
//     console.log(2)


// })()

//const secretValue=readMultipleFiles('./files/one.txt')
//console.log(secretValue)


module.exports= {readMultipleFiles};