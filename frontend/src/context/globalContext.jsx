import React from "react";
import {useState, useContext} from "react";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async (income) => {
        try {
        const response = await fetch('http://localhost:5000/api/v1/add-income', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(income)
        })
        const data = await response.json();
        } catch (error) {
            setError('Cant add income')
        }
        getIncomes()
    }

    const getIncomes = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/get-income')
            const data = await response.json();
            setIncomes(data);
        } catch (error) {
            setError('Cant get incomes')
        }
    }

    const deleteIncome = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/delete-income/${id}`, {
            method: 'delete'
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            setError('Cant delete')
        }
        getIncomes()
    }

    const totalIncome = () => {
        let total = 0;
        incomes.forEach((income) => {
            total = total + income.amount
        })
        return total   
    }


    const addExpense = async (expense) => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/add-expense', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(expense)
            })
            const data = await response.json();
            console.log(data);
        } catch(error) {
            setError('cant add expense')
        }
        getExpenses()
    }
   
    const getExpenses = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/get-expense')
            const data = await response.json();
            setExpenses(data);
        } catch (error) {
            setError('Cant get expenses')
        }
    }

    const deleteExpense = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/delete-expense/${id}`, {
            method: 'delete'
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            setError('Cant delete')
        }
        getExpenses()
    }

    const totalExpenses = () => {
        let total = 0;
        expenses.forEach((income) => {
            total = total + income.amount
        })
        return total   
    }




    return (
        <GlobalContext.Provider value={{addIncome, getIncomes, incomes, deleteIncome, totalIncome, addExpense, getExpenses, deleteExpense, totalExpenses, expenses}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}



