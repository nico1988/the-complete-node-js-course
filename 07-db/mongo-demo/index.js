const mongoose = require('mongoose');
const debugDb = require('debug')('app:db');
const {connectToMongo} = require('./connect');

// model
const {CourseModel} = require('./model/course')
connectToMongo()
    .then(() => {
        debugDb('connect mongoose success:::');
    })
    .catch((err) => {
        debugDb('connect mongoose fail', err);
    });

// 构建模型
const courseSchema = new mongoose.Schema(CourseModel);

// 构建实体对象
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const newCourse = {
        name: 'node course',
        author: 'mosh',
        price: 2,
        tags: ['node', 'frontend'],
        isPublished: true
    };
    const course = new Course(newCourse);
    const result = await course.save();
    debugDb('result', result)
}

// createCourse();
async function getCourses() {
    // 操作符
    // eq
    // ne
    // gt
    // gte
    // lt
    // lte
    // in
    // nin

    // 逻辑操作符
    // or and
    const courses = await Course
        // .find({
        //     author: 'mosh',
        //     isPublished: true
        // })
        // .find({price: { // 大于10
        //     $gt: 10
        // }})
        // .find({ // 操作符
        //     price: {
        //         $in: [10, 2, 9]
        //     }
        // })
        .find()
        .or([{author: 'mosh'},{isPublish: false}]) // 逻辑 或者
        // .and([{author: 'mosh'},{isPublish: false}]) // 逻辑
        .limit(5)
        .sort({name: 1})
        .select({
            name: 1, tags: 1, price: 1
        });
    debugDb('courses:::', courses);
}
// getCourses();

async function getAuthorByReg() {
    const courses = await Course
        // .find({author: /^mosh/ })  // 以什么开头的
        // .find({author: /nico$/}) // 以什么结尾的
        .find({author: /.*nico.*/i}) // 包含某个patter的
        .limit(10)
        .sort({name: 1})
        .select({
            name: 1, tags: 1, author: 1, price: 1
        });
    console.log('courses:::', courses);
}

getAuthorByReg();

