const express = require('express');
const mongoose = require('mongoose');
// const Joi = require('@hapi/joi');
const { validate, ValidationError, Joi } = require('express-validation')
const app = express();

const port = process.env.port || 3000;


mongoose.connect('mongodb://localhost:27017/playground',{ useUnifiedTopology: true })
    .then(() => console.info('connect mongodb success:::'))
    .catch(err => console.error('could not connect mongodb'));

const Course = mongoose.model('movie', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 10
    }
}));

// middleware
app.use(express.json());
const {courses} = require('./courses');

// api
app.get('/', async function (req, res) {
    const courses = await Course.find();
    res.send(courses);
});
app.get('/api/courses', function (req, res) {
    res.send(courses);
});

// get single course
app.get('/api/course/:id', function (req, res) {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('没有找到您的课程');
    } else {
        res.send({
            course: course
        });
    }
});

const VlidateSchema = {
    name: Joi.string().min(3).required()
};
// set new course
app.post('/api/course', (req, res) => {
    const result = Joi.validate(req.body, VlidateSchema);
    console.log('result:::', result);

    if (!req.body.name || req.body.name.length < 3) {
        // 400 bad request
        res.status(400).end('name should be minimum 3 characters');
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/post/:year/:month', function (req, res) {
    res.send({
        year: req.params.year,
        month: req.params.month,
        query: req.query
    });
});

// update
app.put('/api/courses/:id', (req, res) => {
    // look up the course 如果没有 404
    const course = courses.find(c => c.id = parseInt(req.params.id));
    if (!course) return res.status(404).send('not found');

    // validate

    // update course
    course.name = req.body.name;
    res.send(course);
});
app.listen(port, () => {
    console.log('app is listening on port', port);
});
