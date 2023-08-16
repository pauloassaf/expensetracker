import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import {InnerLayout} from "../style/Layouts";
import {useGlobalContext} from '../context/globalContext';
import IncomeForm from './IncomeForm';
import AddedItem from './AddedItem';


function Income() {
    const {incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext()

    useEffect(() => {
        getIncomes()
    }, [])

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Income</h1>
                <h2 className="total-income">
                    Total Income:<span>${totalIncome()}</span>
                </h2>
                <div className="income-content">
                    <div className="form-container">
                        <IncomeForm />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <AddedItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>     
            </InnerLayout> 
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display:flex;
    overflow: auto;
    .total-income{
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
    .income-content{
        display:flex;
        gap: 2rem;
        .incomes{
            flex:1;
        }
    }
`;

export default Income;