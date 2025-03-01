const mongoose = require("mongoose")
require('dotenv').config()

const DB_URL = process.env.MONGODB_URL


const connectDB = async() => {

    try {
        await mongoose.connect(DB_URL);
        console.log("Successfully connected to DataBase");
    } catch (error) {
        console.error("Error connecting to Database", error);
    }
}

module.exports = connectDB