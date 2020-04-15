const mongoose = require('mongoose');
const debugPage = require('debug')('app:delete');
const {connectToMongo} = require('./connect');
// model
const {CourseModel} = require('./model/course')
connectToMongo()
    .then(() => {
        debugPage('connect mongoose success:::');
    })
    .catch((err) => {
        debugPage('connect mongoose fail', err);
    });

const courseSchema = new mongoose.Schema(CourseModel); // schema
const Course = mongoose.model('Course', courseSchema); // model

async function deleteCourse(id) {
    // const result = await Course.deleteOne({
    //     _id: id
    // });
    // const result = await Course.findByIdAndRemove();
    const result = await Course.findByIdAndRemove();
    debugPage('result:::', result);
}

deleteCourse('5e932e2743e6a646d4f4fefd');
