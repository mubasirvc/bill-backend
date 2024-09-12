require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const expressConfig = require('./config/expressConfig');
const express = require('express');

dbConfig(); 
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api/items', itemRoutes);

const express = require('express');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
