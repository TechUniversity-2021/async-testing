const fileOps= require("./promisify-file-read/PromisifyFileRead")

async function readMultipleFiles(path) {
    const fileOneContent =await fileOps.getText(path)
    const fileTwoContent =await fileOps.getText(fileOneContent)
    const fileThreeContent =await fileOps.getText(fileTwoContent)
    return fileThreeContent;
}

// (async function() {
//     const secretValue= await readMultipleFiles('./files/one.txt')
//     console.log(secretValue)

// })()

//const secretValue=readMultipleFiles('./files/one.txt')
//console.log(secretValue)


module.exports= {readMultipleFiles};