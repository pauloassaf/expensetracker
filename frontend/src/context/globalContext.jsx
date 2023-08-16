import React from "react";
import {useState, useContext} from "react";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])

    const addIncome = async (income) => {
        try {
        const response = await fetch('https://brick-red-bullfrog-sari.cyclic.app/add-income', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(income)
        })
        const data = await response.json();

        } catch (error) {
            console.error('cant add income', error)

        }
        getIncomes()
    }

    const getIncomes = async () => {
        try {
            const response = await fetch('https://brick-red-bullfrog-sari.cyclic.app/api/v1/get-income')
            const data = await response.json();
            setIncomes(data);
        } catch (err) {
            return setError('Cant get incomes')
        }
    }

    const deleteIncome = async (id) => {
        try {
            const response = await fetch(`https://brick-red-bullfrog-sari.cyclic.app/delete-income/${id}`, {
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
            const response = await fetch('https://brick-red-bullfrog-sari.cyclic.app/add-expense', {
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
            const response = await fetch('https://brick-red-bullfrog-sari.cyclic.app/api/v1/get-expense')
            const data = await response.json();
            setExpenses(data);
        } catch (error) {
            setError('Cant get expenses')
        }
    }

    const deleteExpense = async (id) => {
        try {
            const response = await fetch(`hhttps://brick-red-bullfrog-sari.cyclic.app/delete-expense/${id}`, {
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


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0, 4)
    }




    return (
        <GlobalContext.Provider value={{addIncome, getIncomes, incomes, deleteIncome, totalIncome,
         addExpense, getExpenses, deleteExpense, totalExpenses, expenses, totalBalance, transactionHistory}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}



