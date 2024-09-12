const mongoose = require('mongoose');

const dbConfig = () => {
    const DB = process.env.MONGO_URI || 'mongodb://localhost:27017/item-crud';
    mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected successfully'))
        .catch(err => console.log('MongoDB connection error:', err));
};

module.exports = dbConfig;
