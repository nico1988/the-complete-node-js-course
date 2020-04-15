const mongoose = require('mongoose');
const debugDb = require('debug')('app:validate');
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
        // name: 'node course',  // 验证只在mongoose级别管用  mongodb本身不管name字段有没有 都能存
        author: 'mosh',
        price: 2,
        tags: ['node', 'frontend'],
        isPublished: true
    };
    const course = new Course(newCourse);
    try {
        // await course.validate(function (err) {
        //     if (err) {
        //         debugDb('err:::', err);
        //     }
        // });  // promise void 设计错误

        const result = await course.save();
        debugDb('result', result)
    }catch (e) {
        debugDb('err:::', e);
    }
}

createCourse();
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

// getAuthorByReg();

async function getAuthorByRegCount() {
    const courses = await Course
        // .find({author: /^mosh/ })  // 以什么开头的
        // .find({author: /nico$/}) // 以什么结尾的
        .find({author: /.*nico.*/i}) // 包含某个patter的
        .limit(10)
        .sort({name: 1})
        .count();
    console.log('courses:::', courses);
}

// getAuthorByRegCount();
