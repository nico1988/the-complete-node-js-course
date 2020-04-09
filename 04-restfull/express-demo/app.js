const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('hello');
});
app.get('/api/course', function (req, res) {
    res.send([1, 2, 3]);
});
app.listen(3000, () => {
    console.log('app is listening on prot 3000');
});
