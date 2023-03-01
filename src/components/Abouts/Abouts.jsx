import React from 'react'
import styled from "styled-components";
import TickCircle from '../../assets/tick-circle.svg'

function Abouts({title}) {
  return (
    <>
        <AboutsContainer>
            <img src={TickCircle} />
            <p>{title}</p>
        </AboutsContainer>
    </>
  )
}

export default Abouts

const AboutsContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 10px;
    font-size: 20px;
    margin: 40px 0;

     p {
        color: #192252 !important;
     }
`;