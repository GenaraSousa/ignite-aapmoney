import styled from 'styled-components';

export const Container = styled.header`
`
export const Content = styled.div`

    @media (max-width: 411px){
            font-size: 70.5%;
            img {
                width: 10rem;
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
        color: var(--text-title);
        font-weight: 700;
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