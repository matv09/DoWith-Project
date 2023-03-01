import styled from "styled-components";

export const Button = styled.button`
    background: ${({primary}) => (primary ? '#6345D5' : '#FFFFFF')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: ${({primary}) => (primary ? '#FFFFFF' : '#000000')};
    font-size: ${({ big }) => (big ? '18px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '1rem' : 'none')};

    &:hover {
        background: ${({primary}) => (primary ? '#077BF1': '#F26A2E')};
        transform: translateY(-2px);
    }
`;