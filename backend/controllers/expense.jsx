const expenseSchema = require('../models/expenseModel');


const addExpense = async (req, res) => {
   const {title, amount, category, description, date} = req.body
   const expense = expenseSchema({
    title,
    amount,
    category,
    description,
    date
   })
   
   try {
        if(!title || !category || !description || !date) {
        return res.status(400).json({message: "All fields are required"})
            }
        if(amount <= 0 || !amount === 'number'){
        return res.status(400).json({message: "Wrong amount"})
            }
        await expense.save()
        res.status(200).json({message: "Expense added"})
   } catch (error) {
        return res.status(500).json({message: "Cant add expense"})
   }
   console.log(expense)
}

const getExpense = async (req, res) => {
    try {
        const expense = await expenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json("cant get expense from db")

    }
}

const deleteExpense = async (req, res) => {
    const {id} = req.params;
    console.log(req.params);
    expenseSchema.findByIdAndDelete(id)
    .then((response) => {
        res.status(200).json("Expense deleted")
    }).catch((error) => {
        res.status(500).json("Couldnt delete")
    })
}

module.exports = {addExpense, getExpense, deleteExpense}