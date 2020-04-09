// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// 注意emitter只是一个对象  和其他模块是不一样的
// emitter.on('msg', function (arg) {
//     console.log('msg:::',arg)
// });
// trigger event
// emitter.emit('msg',{msg:'hello-world'});
const Logger = require('./event-log'); // 基于类我们可以不用引入event
const logger = new Logger();

logger.on('msg', (arg) => {
    console.log('listener called:::', arg);
});
logger.log('message');
