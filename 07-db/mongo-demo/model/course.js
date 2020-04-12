module.exports.CourseModel = {
    name: String,
    author: String,
    tags: [String],
    price: Number,
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
}
