const mongoose = require('mongoose');
const debugPage = require('debug')('app:update');
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
async function updateCourse(id) {
    // find first 先查询 再更新 适合先验证 再更新
    const course = await Course.findById(id);
    // if(course.isPublished) return //  适合先验证 再更新
    if (!course) return;
    // course.author = 'another author';
    // course.isPublished = false;
    course.set({
        author: 'another author',
        isPublished: !course.isPublished
    });
    const result = await course.save();
    console.log('result:::', result);
}

// updateCourse('5e932e50c1983a09ac500542');

async function updateCourseDirect(id) {
    const result = await Course.findByIdAndUpdate({
        _id: id
    }, {
        $set: {
            author:'nico3',
            isPublished: false
        }
    }, {
        new: true // 返回更新的文档
    });
    debugPage('result:::', result);
}

updateCourseDirect('5e932e2743e6a646d4f4fefd');

