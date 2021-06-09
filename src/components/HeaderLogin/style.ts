import styled from 'styled-components';

export const Container = styled.header`
`
export const Content = styled.div`

    @media (max-width: 411px){
            font-size: 70.5%;
            background: blue;
            
    }
    
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


    button {
        background: var(--background);
        font-size: 1rem;
        color: var(--text-title);
        border: 1.5;
        border-color:  #969CB2;
        border-style: solid;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(1.2);
        }
    }

`