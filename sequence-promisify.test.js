const filePromisify = require('./promisifyFs.js')

const fileOps = require('./sequence-promisify.js')


test("Should print SECRET MESSAGE",()=>
{
  return expect(fileOps.getSecret()).resolves.toEqual("This is your secret")
    
})


test("PROMISE REJECT",()=>
{
  
   return expect(fileOps.getSecret()).rejects.toBe("error")

  })



test('unit file read success',()=>{
    jest.spyOn(filePromisify, 'readData')
    .mockResolvedValue('abc')
    return expect(fileOps.getSecret()).resolves.toEqual("abc");
})