const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db CONNECTED ALL GOOD!")
    } catch (error) {
        console.log("db connect FAIL")
    }
}

module.exports = {db}