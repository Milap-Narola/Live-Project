const mongoose = require('mongoose')
require("dotenv").config();
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('Connected to Database')
    } catch (error) {
        console.error('Failed to connect to MongoDB', error)
    }
}

module.exports = connectDb;
