var logger = require('./logger'); // 导入模块  nodejs是commonjs规范  采用module.exports 和 require
console.log('logger:::', logger);
console.log('logger.url:::', logger.url);
console.log('logger.log', logger.log('hello world'));
var logger2 = require('./logger');
console.log('logger2:::', logger2);
console.log('module:::', module);
var path = require('path');
var pathObj = path.parse(__filename);
console.log('pathObj:::', pathObj);
