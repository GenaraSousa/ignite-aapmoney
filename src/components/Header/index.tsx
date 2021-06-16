
import { useState } from 'react';
import logoImg from '../../assets/logoLogin.svg';
import { Container, Content } from './style';


export function Header() {
    const [user, setUser] = useState('Alícia');
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="aat. money" />
                <button type="button" onClick={() => { }}>
                    Olá, {user}
                </button>
            </Content>
        </Container>
    )
}