
import { useState } from 'react';
import logoImg from '../../assets/logoLogin.svg';
import { Container, Content } from './style';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    const [user, setUser] = useState('Alícia');

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="aat. money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Olá, {user}
                </button>
            </Content>
        </Container>
    )
}