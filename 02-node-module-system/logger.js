var url = 'http://mylogger.io/log';

function log(message) {
    // send http request
    console.log('message:::', message);
}

module.exports.log = log;
module.exports.url = url;
console.log('module:::', module);
