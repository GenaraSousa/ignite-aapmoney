import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;
export const ButtonGoogle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    font-size:1rem ;
    background: var(--background);
    margin-bottom: 1.5rem;
    color: var(--text-title);
    font-weight: 400;
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    span{
        margin-left: 1rem;
        margin-right: 2rem;
    }
`;

export const ContainerLogin = styled.form`
    padding: 2rem 1rem 1rem;
    display: flex;
    align-self: center;
    align-items: center;
    flex-direction: column;
    width: 22rem;
    height: 49rem;

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
        align-self: center;
    }
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;

        border: 1px solid var(--input-border);
        background: var(--input-background);
        
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
           margin-top : 1rem ;
        }

        &:focus {
            outline: none !important;
            border:1.5px solid var(--green);
            box-shadow: 0 0 2px #719ECE;
        }
    }
    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--green);
        color: var(--shape);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        
        transition: filter 0.2s;
        font-weight: 600;

        &:hover {
            filter: brightness(0.9);
        }

    }
`;