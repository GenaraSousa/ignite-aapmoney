import styled from "styled-components";


export const ButtonNewTransaction = styled.button`
    background: var(--green) ;
    font-size: 1rem;
    color: var(--shape);
    font-weight: 800;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    border: 0px solid var(--input-border);
    &:hover{
        filter: brightness(0.9);
    }
`;

