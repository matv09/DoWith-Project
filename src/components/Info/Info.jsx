import styled from "styled-components";

export const Info = styled.button`
    background: ${({blurred}) => (blurred ? 'rgba(255, 255, 255, 0.7)' : '#FFFFFF')};
    /* white-space: nowrap; */
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: ${({blurred}) => (blurred ? '#848FAC' : '#192252')};
    font-weight: ${({blurred}) => (blurred ? 'medium' : 'bold')};
    font-size: ${({ big }) => (big ? '18px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    transition: 0.3s !important;
    border-radius: 0.5rem;

    &:hover {
        background: ${({primary}) => (primary ? '#077BF1': '#F26A2E')};
        transform: translateY(-2px);
    }
`;