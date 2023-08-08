const incomeSchema = require('../models/incomeModel');


const addIncome = async(req, res) => {
   const {title, amount, category, description, date} = req.body
   const income = incomeSchema({
    title,
    amount,
    category,
    description,
    date
   })

   console.log(income); 
   
   try {
        if(!title || !category || !description  || !date) {
        return res.status(400).json({message: "All fields are required"})
            }
        if(amount <= 0 || !amount === 'number'){
        return res.status(400).json({message: "Wrong amount"})
            }
        await income.save()
        res.status(200).json({message: "Income added"})
   } catch (error) {
        return res.status(500).json({message: "Cant add income"})
   }
   console.log(income)
}

const getIncome = async (req, res) => {
    try {
        const income = await incomeSchema.find().sort({createdAt: -1})
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json("cant get income from db")

    }
}

const deleteIncome = async (req, res) => {
    const {id} = req.params;
    console.log(req.params);
    incomeSchema.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json("income deleted")
    }).catch((error) => {
        res.status(500).json("couldnt delete")
    })
}

module.exports = {addIncome, getIncome, deleteIncome}