module.exports.CourseModel = {
    name: {
        type: String,
        required: true
    },
    author: String,
    tags: [String],
    price: Number,
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
}
