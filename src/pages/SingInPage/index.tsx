import { useState } from "react";
import { HeaderLogin } from "../../components/HeaderLogin";
import { Container, ContainerLogin } from "./style";


export function SingInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <HeaderLogin />
            <ContainerLogin>
                <h2>Login</h2>
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
                <button type="submit">Entrar</button>

            </ContainerLogin>
        </ Container>
    )
}