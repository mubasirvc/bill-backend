// const mongoose = require('mongoose');

// const dbConfig = () => {
//     const DB = process.env.MONGO_URI || 'mongodb://localhost:27017/item-crud';
//     mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => console.log('MongoDB connected successfully'))
//         .catch(err => console.log('MongoDB connection error:', err));
// };

// module.exports = dbConfig;


const mongoose = require('mongoose');

const dbConfig = async () => {
    try {
        const DB = process.env.MONGO_URI || 'mongodb://localhost:27017/item-crud';
        await mongoose.connect(DB);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = dbConfig;
