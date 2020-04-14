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
const courseSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 255,
            // match: /pattern/
        },
        category: {
            type: String,
            enum: ['web', 'mobile', 'network'],
            required: true
        },
        author: String,
        tags: {
            type: Array,
            validate: { // 自定义过滤器
                // isAsync: true, // 这个方式已经被抛弃了 采用下面的方式来返回一个promise
                validator: function (v) {  // 自定义验证器
                    return new Promise(function (resolve, reject) {
                        setTimeout(() => { // setTimeout 模拟异步操作
                            // do async work
                            const result = v && v.length > 0;
                            resolve(result);
                        },4000);
                    })

                    // return v && v.length > 0;
                },
                message: `a course should have at lease one tag` // 自定义验证信息
            }
        },
        isPublished: {
            type: Boolean,
            validate: {
                validator: function (v) { // 异步验证
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve(v === false);
                        },3000)
                    })
                },
                message: 'isPublished should be false'
            },
        },

        date: {
            type: Date,
            default: Date.now
        },
        price: {
            type: Number,
            required: function () { // 这里不能写箭头函数
                return this.isPublished
            },
            min: 0,
            max: 20
        }
    }
);

// 构建实体对象
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {

    const newCourse = {
        name: 'node course',  // 验证只在mongoose级别管用  mongodb本身不管name字段有没有 都能存
        author: 'mosh',
        category: 'web',
        price: 2,
        tags: ['web'], // 如果为空 或者不是数组 就会验证出错
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
    } catch (e) {
        debugDb('err:::', e.message);
    }
}

createCourse();
