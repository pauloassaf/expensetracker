const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 20
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLenght: 20
    },
    type: {
        type: String,
        default: "income"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true, 
        trim: true,
        maxLenght: 50
    },
    description: {
        type: String,
        required: true,
        maxLenght: 20,
        trim: true

    }
}, {timestamps: true})

module.exports = mongoose.model('income', incomeSchema)