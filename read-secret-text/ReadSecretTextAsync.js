const promisifyfs = require('../promisify/promisifyFs')

async function getSecret(path) {

    try{
    const file1 = await promisifyfs.readFile(path)
    const file2 =  await promisifyfs.readFile(file1)
    const file3 = await promisifyfs.readFile(file2);
    return file3
    }
    catch(error){
        throw "error"
    }
    
}

(async function() {
    await getSecret("../file/one.txt");
    

})()


module.exports = { getSecret }