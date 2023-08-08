import React from "react";
import styled from "styled-components";
import {InnerLayout} from "../style/Layouts";


function Dashboard() {
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Dashboard</h1>    
            </InnerLayout> 
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    border: 3px solid #FFFFFF;

`;

export default Dashboard;