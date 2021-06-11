import styled from 'styled-components';

export const Container = styled.header`
    margin: 0;
    padding: 0;
`
export const Content = styled.div`

    @media (max-width: 411px){
            font-size: 50.5%;
            margin: 0;
            padding:0.5rem 0.5rem 8rem;  
            img {
                width: 45%;
            }    
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
        font-weight: 700;
        color: var(--text-title);
        border: 1.5;
        border-color:  rgb(150, 156, 178, 0.5);
        border-style: solid;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(1.2);
        }
    }

`