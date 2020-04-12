const http = require('http');
const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.end('hello');
        res.end();
    }
    if (req.url === '/api/course') {
        res.end('hello world');
        res.end();
    }
});
server.listen(3000);
console.log('listening on 3000');
server.on('connection', (socket) => {
    console.log(`new connection, ${new Date()}`);
});
