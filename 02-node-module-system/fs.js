var fs = require('fs');
const files = fs.readdirSync('./');  // 同步版本
console.log('files:::', files);
fs.readdir('/abc', function (err, files) {
    if (err) {
        console.log('err:::', err);
    }
    console.log('files:::', files);
});

fs.readdir('./', function (err, files) {
    if (err) {
        console.log('err:::', err);
    }
    console.log('files:::', files);
});
