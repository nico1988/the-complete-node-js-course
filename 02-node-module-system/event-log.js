const EventEmitter = require('events');

module.exports.log = function () {
    emitter.emit('msg',{msg:'hello-world'});
}

class Logger extends EventEmitter{
    log(message) {
        console.log(message);
        this.emit('msg',{id:1,url:'www.baidu.com'})
    }
}
module.exports = Logger;
