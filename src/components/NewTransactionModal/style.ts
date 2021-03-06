import { darken, transparentize } from 'polished';
import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
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

    /* retirando botões de rolagem do input tipo number */
    input[type="number"]::-webkit-outer-spin-button, 
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
    /*---------------------*/

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
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

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;


interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    red: "#e52e4d",
    green: "#33CC95"
}


export const RadioBox = styled.button<RadioBoxProps>`
        height: 4rem;
        border: 1px solid var(--input-border);
        border-radius: 0.25rem;

        background: ${(props) => props.isActive
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img {
            width: 20px;
            height: 20px;
        }
        
        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
`;