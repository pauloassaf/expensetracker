const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB CONNECTED ALL GOOD")
    } catch (error) {
        console.log("DB CONNECTION ERROR MASTER FAIL")
    }
}

module.exports = {db}