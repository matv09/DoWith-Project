import React from 'react'
import styled from "styled-components";


function Company({imgSrc}) {
  return (
    <>
        <CompanyContainer>
            <img src={imgSrc} />
        </CompanyContainer>
    </>
  )
}

export default Company

const CompanyContainer = styled.div`
    display: flex;
    flex-direction: row;

    img {
        display: flex;
    }
`;