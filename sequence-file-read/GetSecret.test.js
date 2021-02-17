//const fileUtils = require("./promisifyFs")

const fileUtils = require("../promisify-read-file/PromisifyReadFile")
const {getSecret,getSecretAsync} = require("./GetSecret")

test('unit file read',(done)=>{
    const spy = jest.spyOn(fileUtils,'promisifyFs')
    spy.mockResolvedValueOnce('abc')
    spy.mockResolvedValueOnce('def')
    spy.mockResolvedValueOnce('ghi')
    getSecretAsync('./drtdyd.txt').then(data =>  {
        expect('ghi').toBe(data)
        console.log(data)
        done()
    })
  })