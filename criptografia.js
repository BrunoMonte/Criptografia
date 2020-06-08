const crypto = require('crypto')
const alg = 'aes-256-ctr'
const pwd = 'abcdabcd123'

function crypt(text){
const cipher = crypto.createCipher(alg, pwd)
const crypted = cipher.update(text, 'utf8', 'hex')
return crypted
}
function decrypt(text){
    const decipher = crypto.createDecipher(alg, pwd)
    const plain = decipher.update(text, 'hex', 'utf8')
    return plain
}

console.log(crypt('87604050'))
console.log(decrypt('25829d40a1f59183'))
