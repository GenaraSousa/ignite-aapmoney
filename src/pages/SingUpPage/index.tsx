import { useState } from "react";
import { HeaderSingUp } from "../../components/HeaderSingUp";
import { Container, ContainerLogin } from "./style";

export function SinUpPage() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmitLogin() {

    }

    return (
        <Container>
            <HeaderSingUp />
            <ContainerLogin>
                <h2>Criar conta</h2>
                <input
                    type="username"
                    placeholder="Primeiro nome"
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}

                />
                <button type="submit">Cadastrar</button>

            </ContainerLogin>
        </ Container>
    )
}