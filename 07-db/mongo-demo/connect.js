const mongoose = require('mongoose');
function connectToMongo() {
    return mongoose.connect('mongodb://localhost:27017/playground', { useUnifiedTopology: true } );
}

module.exports.connectToMongo = connectToMongo;
