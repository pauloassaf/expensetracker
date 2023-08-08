import React from "react";
import styled from "styled-components";
import {InnerLayout} from "../style/Layouts";


function Expenses() {
    return (
        <ExpensesStyled>
            <InnerLayout>
                <h1>Expenses</h1>    
            </InnerLayout> 
        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`
    border: 3px solid #FFFFFF;

`;

export default Expenses;