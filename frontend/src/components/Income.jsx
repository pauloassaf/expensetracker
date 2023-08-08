import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import {InnerLayout} from "../style/Layouts";
import {useGlobalContext} from '../context/globalContext';
import Form from '../components/Form';
import IncomeItem from '../components/IncomeItem';


function Income() {
    const {addIncome, incomes, getIncomes } = useGlobalContext()

    useEffect(() => {
        getIncomes()
    }, [])

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Income</h1>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                category={category}
                                indicatorColor="var(--color-green)"
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
    .income-content{
        display:flex;
        gap: 2rem;
        .incomes{
            flex:1;
        }
    }
`;

export default Income;