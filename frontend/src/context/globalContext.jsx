import React from "react";
import {useState, useContext} from "react";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpense] = useState([])
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
            setError(error.response.data.message)
        };
    }

    const getIncomes = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/get-income')
            const data = await response.json();
            setIncomes(data);
        } catch (error) {
            setError(error.response.data.message)
        }
    }


    return (
        <GlobalContext.Provider value={{addIncome, getIncomes, incomes}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}



