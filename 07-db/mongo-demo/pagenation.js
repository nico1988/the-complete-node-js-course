const mongoose = require('mongoose');
const debugPage = require('debug')('app:page');
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

// get data
async function getCourseByPage({page = 2, pageSize = 5}) {
    console.log(page);
    console.log(pageSize);
    const course = await Course
        .find({author: 'mosh', isPublished: true})
        .skip((page - 1) * pageSize) // 分页
        .limit(pageSize)
        .sort({price: -1})
        .select({name: 1, tags: 1, author: 1, price: 1});


    debugPage('course:::', course);

}

// real world params coming from restFull ap
const params = {
    page: 1,
    pageSize: 5
};
getCourseByPage(params);
