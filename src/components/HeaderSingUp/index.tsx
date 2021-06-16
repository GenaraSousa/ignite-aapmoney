import logoImg from '../../assets/logoLogin.svg';
import { Container, Content } from './style';
export function HeaderSingUp() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="aat. money" />
                <button type="button" onClick={() => { }}>
                    Entrar
                </button>
            </Content>
        </Container>
    )
}