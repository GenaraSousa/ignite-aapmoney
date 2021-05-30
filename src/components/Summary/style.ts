import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -6rem;
    div {
        background: var( --shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        &.highlight-backgroung {
            background: var(--green);
            color: var( --shape);
        }
        header{
        display: flex;
        align-items: center;
        justify-content: space-between ;
        }
        strong{
            //por padrão o strong vem com display inline, logo o margin-top nao funciona
            //o display block faz com que ele se comporte como uma div
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    }
`;