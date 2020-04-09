// const http = require('http');
// const server = http.createServer((req,res) => {
//     console.log('listening on port 3000');
//     if (req.url === '/') {
//         res.write('hello');
//         res.end();
//     }
//     if (req.url === '/api/course') {
//         res.write(JSON.stringify([1,3,4]))
//         res.end();
//     }
// });
// server.on('connection', (socket)=> {
//     console.log('new connection:::');
// });
// server.listen(3000);
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('incoming message');
    if (req.url === '/') {
        res.write('hello');
        res.end();
    }
    if (req.url === '/api/course') {
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
});
server.on('connection', (socket => {
    console.log('new socket coming');
}));
server.listen(3000);

