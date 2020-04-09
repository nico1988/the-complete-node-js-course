const express = require('express');
const app = express();
const port = process.env.port || 3000;
app.get('/', function (req, res) {
    res.send('hello');
});
app.get('/api/course', function (req, res) {
    res.send([1, 2, 3]);
});
app.get('/api/course/:id', function (req, res) {
    res.send({
        id: req.params.id,
        course: [1, 2, 3]
    });
});
app.get('/api/post/:year/:month', function (req, res) {
    res.send({
        year: req.params.year,
        month: req.params.month,
        query: req.query
    });
});
app.listen(port, () => {
    console.log('app is listening on port', port);
});
