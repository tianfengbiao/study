var path = require('path');

console.log('__dirname=====',__dirname)
console.log('ath.resolve()11===',path.resolve('/aa','/bb'))
console.log('ath.resolve()22===',path.resolve('/aa','./bb'))
console.log('ath.resolve()33===',path.resolve('./aa','./bb'))
console.log('ath.join()===',path.join(__dirname,'./aa','./bb'))