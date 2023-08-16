import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from '../utils/useWindowSize';


function Orb() {

    const { width, height} = useWindowSize()

    console.log(width, height);

    const moveOrb = keyframes`
        0% {
            transform: translate(0, 0);
        } 
        50% {
            transform: translate(${width}px, ${height}px);
        } 
        100% {
            transform: translate(0vh, 0vw);
        }
    `

    const OrbStyled = styled.div`
        height: 75vh;
        width: 75vh;
        position: absolute;
        border-radius: 50%;
        margin-top: -37vh;
        margin-left: -37vh;
        background: linear-gradient(180deg, #089FB6 0%, #C0E9F0 100%);
        filter: blur(300px);
        animation: ${moveOrb} 10s alternate linear infinite;  
 
    `;
    
    return (
        <OrbStyled></OrbStyled>
    )


}

export default Orb