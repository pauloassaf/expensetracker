import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import {InnerLayout} from "../style/Layouts";
import {useGlobalContext} from '../context/globalContext';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './IncomeItem';


function Expense() {
    const {addExpense, expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext()

    useEffect(() => {
        getExpenses()
    }, [])

    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expense</h1>
                <h2 className="total-Expense">
                    Total Expense:<span>${totalExpenses()}</span>
                </h2>
                <div className="Expense-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="Expenses">
                        {expenses.map((expense) => {
                            const {_id, title, amount, date, category, description} = expense;
                            return <ExpenseItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                category={category}
                                indicatorColor="var(--color-green"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>     
            </InnerLayout> 
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display:flex;
    overflow: auto;
    .total-Expense{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0,0,0,0.1);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: 0.5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .Expense-content{
        display:flex;
        gap: 2rem;
        .Expenses{
            flex:1;
        }
    }
`;

export default Expense;